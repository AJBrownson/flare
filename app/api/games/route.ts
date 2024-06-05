import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { CLAIMED, OUTCOME } from "@prisma/client";

interface IGame {
  address: string;
  outcome: OUTCOME;
  name: string;
  trans: string;
  wager: string;
  claimed?: CLAIMED;
}

export async function POST(req: NextRequest) {
  try {
    const { address, outcome, name, wager, trans } = await req.json();

    if (!address && !outcome && !name)
      return NextResponse.json({ message: "Bad request" }, { status: 400 });

    let data: IGame = {
      address,
      outcome,
      name,
      trans,
      wager,
    };

    if (outcome === OUTCOME.LOSE) {
      data["claimed"] = CLAIMED.NEVER;
    }

    await db.game.create({
      data: data,
    });

    return NextResponse.json({ message: "Data added" });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "ERR" }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const data = await db.game.findMany({
      select: {
        id: true,
        address: true,
        outcome: true,
        name: true,
      },
      take: 20,
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "ERR" }, { status: 400 });
  }
}
