import { connectDb } from "@/helper/db";
import { AdvertiseModel } from "@/model/advertise.model";

import { NextRequest, NextResponse } from "next/server";

connectDb();
export async function GET() {
  try {
    // Find one advertisement
    const advertisement = await AdvertiseModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "createdBy",
          foreignField: "_id",
          as: "createdBy",
        },
      },
      {
        $addFields: {
          createdBy: { $arrayElemAt: ["$createdBy", 0] },
        },
      },
    ]);
    if (!advertisement) {
      return NextResponse.json({
        message: "No advertisement found",
        status: 404,
      });
    }

    return NextResponse.json({
      message: "Advertisement fetched successfully",
      data: advertisement,
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching advertisement:", error);
    return NextResponse.json({
      error: "Internal Server Error",
      status: 500,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, discription, file, startAt, expireTime, createdBy } =
      await request.json();
    const advertise = await new AdvertiseModel({
      title,
      discription,
      file,
      startAt,
      expireTime,
      createdBy,
    });
    const data = await advertise.save();
    return NextResponse.json({
      message: "Adevertisement added successfully",
      data,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      error,
      status: false,
    });
  }
}

export function PUT() {}

export function DELETE() {}
