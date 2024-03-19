import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

//get - getting data
export async function GET(request: NextRequest) {
  // getting the data through prisma
  // getting all users
  // filtering is possible here if needed
  const users = await prisma.user.findMany();
  // returning the users from the db
  return NextResponse.json(users);
}

//post - creating data

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validate
  // if invalid return 400 response
  // else, return the data tht was created
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  if (!body.email)
    return NextResponse.json({ error: "Email is required" }, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
//put - updating data
