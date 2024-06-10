import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  let limit: number;
  try {
    const offset = searchParams.get("offset");
    const limin = searchParams.get("limit");

    if (!offset)
      return NextResponse.json(
        { message: "offset required", status: false },
        { status: 400 }
      );

    const offsetN = Number(offset) || 0;
    limit = Number(limin) || 20;

    // if (offsetN < 1)
    //   return NextResponse.json(
    //     { message: "offset cannot be less than 1", status: false },
    //     { status: 400 }
    //   );

    const results = await db.chat.findMany({
      skip: offsetN * limit,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    const count = await db.chat.count();

    const fiveMinutes = new Date();

    fiveMinutes.setMinutes(fiveMinutes.getMinutes() - 5);

    const online = await db.chat.count({
      where: {
        createdAt: {
          gte: fiveMinutes,
        },
      },
    });

    console.log(online);

    return NextResponse.json({
      data: results.reverse(),
      offset,
      count,
      online,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { address, message } = await req.json();

    if (!address || !message)
      return NextResponse.json(
        { message: "all fields are required", status: false },
        { status: 400 }
      );

    await db.chat.create({
      data: {
        address,
        message,
      },
    });

    return NextResponse.json({ message: "message created", status: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
