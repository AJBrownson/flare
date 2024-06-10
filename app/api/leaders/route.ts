import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams;
  try {
    let data;

    const address = query.get("address");

    console.log("address", address);

    if (address) {
      data = await db.game.groupBy({
        by: ["address"],
        _count: {
          address: true,
        },
        orderBy: {
          _count: {
            address: "desc",
          },
        },
      });

      console.log("all data", data);

      data = data
        .map((dat, i) => {
          if (dat.address === address) {
            return {
              ...dat,
              rank: i + 1,
            };
          }
        })
        .filter((fdat) => fdat !== undefined);

      console.log(data);

      return NextResponse.json({ data });
    }

    console.log("second");

    data = await db.game.groupBy({
      by: ["address"],
      _count: {
        address: true,
      },
      orderBy: {
        _count: {
          address: "desc",
        },
      },
      take: 10,
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
