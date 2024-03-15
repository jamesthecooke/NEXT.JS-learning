import { NextRequest, NextResponse } from "next/server";

// get
export function GET(request: NextResponse) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 2.5 },
    { id: 2, name: "Bread", price: 3.5 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name)
    return NextResponse.json(
      { error: "Product name required" },
      { status: 400 }
    );

  if (!body.price)
    return NextResponse.json({ error: "Price is required" }, { status: 400 });

  return NextResponse.json(
    { id: 3, name: body.name, price: body.price },
    { status: 201 }
  );
}
