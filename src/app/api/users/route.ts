import { connectDb } from "@/helper/db";
import { UserModel } from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";

connectDb();
export function GET() {
  const users = ["hello", "world"];
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, userRole } = await request.json();
    const user = await new UserModel({
      name,
      email,
      password,
      userRole,
    });
    const data = await user.save();
    return NextResponse.json({
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
