import { NextRequest, NextResponse } from "next/server";

//get - getting data
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "James" },
    { id: 2, name: "Bill" },
  ]);
}

//post - creating data

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validate
  // if invalid return 400 response
  // else, return the data tht was created
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
//put - updating data
