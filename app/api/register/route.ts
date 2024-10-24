import User from "@/models/user";
import {connectMongoDB} from "@/lib/mongodb";
import bcrypt from "bcrypt";

import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { userName, email, password } = await request.json();

  await connectMongoDB();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    userName,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
