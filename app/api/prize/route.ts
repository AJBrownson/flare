import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { CLAIMED, Game } from "@prisma/client";
import { prizes as prizesLib } from "@/lib/wallet-prizes";
import { WHEELZ } from "@/components/basic-wheel/hgbdjbhjdvhjdvag";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { sendSolFunds } from "./sender";

const blackList = [
  "addr1q8nz8y88awkl6q2adgl5yhxyphe9hv0uelgx6qm5t4zx5aw7anlpx87jac4cdem2v7u4r7akfha6gjg9g7jt5ty9laxsfka62f",
  "addr1q9txudqa4vp7zfujxxc83llmyeqc5jjgqew32sksmwesgeyyftcusy4pwn8nvfapnv3n6qutvhkymmk7qjzvlfl96wyq6qurfy",
  "addr1q92r3kdsc7t9v38xaw7ch58alkr0utwk5t97jcvhh2pahsaxahs2txqwlk0zrmnq7tc233cqfrku7cy43uphnm4vwdqqheal5y",
];

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  try {
    const address = searchParams.get("address");

    let prizesSolNotClaimed = await db.game.findMany({
      where: {
        address: address as string,
        name: {
          endsWith: "SOL",
        },
        claimed: CLAIMED.NO,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    let prizesSolClaimed = await db.game.findMany({
      where: {
        address: address as string,
        name: {
          endsWith: "SOL",
        },
        claimed: CLAIMED.YES,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // let prizesOther = await db.game.findMany({
    //   where: {
    //     address: address as string,
    //     NOT: [
    //       {
    //         name: {
    //           endsWith: "SOL",
    //         },
    //         claimed: CLAIMED.NEVER,
    //       },
    //       {
    //         name: {
    //           endsWith: "SGY",
    //         },
    //         claimed: CLAIMED.NEVER,
    //       },
    //     ],
    //   },
    //   orderBy: {
    //     createdAt: "desc",
    //   },
    // });

    if (prizesSolNotClaimed.length > 0)
      prizesSolNotClaimed = [
        extractAmountSol({
          sym: "SOL",
          prizes: prizesSolNotClaimed,
          extract: "X",
        }),
      ];

    if (prizesSolClaimed.length > 0)
      prizesSolClaimed = [
        extractAmountSol({
          sym: "SOL",
          prizes: prizesSolClaimed,
          extract: "X",
        }),
      ];

    const prizes = [...prizesSolNotClaimed, ...prizesSolClaimed];

    return NextResponse.json({ data: prizes });
  } catch (error) {
    return NextResponse.json({ message: "ERR" }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, address, createdAt, outcome, wager, id }: Game =
      await req.json();

    if (blackList.includes(address)) {
      return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    if (name.endsWith("SOL")) {
      const prizesSolNotClaimed = await db.game.findMany({
        where: {
          address: address,
          name: {
            endsWith: "SOL",
          },
          claimed: CLAIMED.NO,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      const prizesSolNotClaimedACC = extractAmountSol({
        sym: "SOL",
        prizes: prizesSolNotClaimed,
        extract: "X",
      });

      if (prizesSolNotClaimedACC.name !== name) {
        return NextResponse.json({ message: "Bad request" }, { status: 400 });
      }

      const amount = prizesSolNotClaimedACC.name.includes("X")
        ? prizesLib[wager as WHEELZ].find(
            (item) => item.name === prizesSolNotClaimedACC.name
          )?.amount
        : Number(prizesSolNotClaimedACC.name.split(" ")[0]) * LAMPORTS_PER_SOL;

      console.log("AMOUNT 000PPP CHECK AM", amount);

      const update = await db.game.updateMany({
        where: {
          address: address,
          name: {
            endsWith: "SOL",
          },
          claimed: CLAIMED.NO,
        },
        data: {
          claimed: CLAIMED.YES,
        },
      });

      if (update.count < 1)
        return NextResponse.json({ message: "Already claimed" });
      const trans = await sendSolFunds({
        address,
        amount: amount,
      });

      console.log("send funds oooo", trans);

      if (!trans) {
        console.log("Transaction failed for address", address);

        return NextResponse.json(
          { message: "Transaction failed" },
          { status: 400 }
        );
      }

      return NextResponse.json({ message: "Updated" });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "ERR" }, { status: 400 });
  }
}

const extractAmountSol = ({
  sym,
  prizes,
  extract,
}: {
  sym: string;
  extract: string;
  prizes: Game[];
}) => {
  return prizes.reduce((acc: any, cv: Game) => {
    let accSol: number = 0;

    const amount = prizesLib[cv.wager as WHEELZ].find(
      (item) => item.name === cv.name
    );

    if (acc.name.includes(extract) && amount) {
      const accAmount = prizesLib[acc.wager as WHEELZ].find(
        (item) => item.name === acc.name
      );

      if (accAmount)
        accSol =
          Number(accAmount.amount) / LAMPORTS_PER_SOL +
          Number(amount.amount) / LAMPORTS_PER_SOL;
    } else if (!acc.name.includes(extract) && amount)
      accSol =
        Number(acc.name.split(" ")[0]) +
        Number(amount.amount) / LAMPORTS_PER_SOL;

    return {
      ...acc,
      name: `${accSol} ${sym}`,
    };
  });
};
