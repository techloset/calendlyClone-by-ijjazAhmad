import prisma from "@/config/prisma";
import { availabilitySchema } from "@/constants/ValidationSchema/availabilitySchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { startHour, endHour, days, userName } =
      availabilitySchema.parse(body);
    console.log("🚀 ~ POST ~ body:", startHour, endHour, days, userName);

    const availability = await prisma.availability.create({
      data: {
        startHour: startHour,
        endHour: endHour,
        days: days,
        userName: userName,
      },
    });
    return NextResponse.json(
      { message: "add availability successfuly", date: availability },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const availability = await prisma.availability.findMany();

    if (!availability) {
      return NextResponse.json(
        { message: "User's availability data not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "User's availability retrieved successfully",
        data: availability,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
export async function PUT(req: NextRequest) {
  try {
    const { userName } = await req.json();
    const availability = await prisma.availability.findUnique({
      where: { userName: userName },
    });

    if (!availability) {
      return NextResponse.json(
        { message: "User's availability data not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "User's availability retrieved successfully",
        data: availability,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
