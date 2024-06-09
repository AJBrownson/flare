import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const data = await db.game.groupBy({
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
