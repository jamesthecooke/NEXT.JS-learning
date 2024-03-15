import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "user not fiund " }, { status: 404 });

  return NextResponse.json({ id: params.id, name: "John" });
}

// put- replacing a object
// patch - updating one or more properties

export function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //  Validate the rewuest body
  // if invalid return 400
  // fetch the user with the gieven id
  // if doesnt exist, return 404
  // update the user
  // return the updated user
}
