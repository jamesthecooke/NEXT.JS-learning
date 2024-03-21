import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

// get
export async function GET(request: NextResponse) {
  const products = await prisma.products.findMany();
  return NextResponse.json(products);
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

  const product = await prisma.products.findUnique({
    where: { name: body.name },
  });

  if (product)
    return NextResponse.json(
      { error: "Product already exists" },
      { status: 400 }
    );

  const newProduct = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}
