import { NextRequest, NextResponse } from "next/server";

//get - getting data
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "James" },
    { id: 2, name: "Bill" },
  ]);
}

//post - creating data
//put - updating data
