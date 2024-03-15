import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 400 });

  return NextResponse.json({ id: params.id, name: "chicken", price: 5 });
}

// put- replacing a object
// patch - updating one or more properties

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //  Validate the rewuest body
  // if invalid return 400
  // fetch the user with the gieven id
  // if doesnt exist, return 404
  // update the user
  // return the updated user

  const body = await request.json();

  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  if (!body.name)
    return NextResponse.json({ error: " Name is required" }, { status: 400 });

  if (!body.price)
    return NextResponse.json({ error: " Price is required" }, { status: 400 });

  return NextResponse.json({ id: 3, name: body.name, price: body.price });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 400 });

  return NextResponse.json({});
}
