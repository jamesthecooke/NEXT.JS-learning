import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 400 });

  return NextResponse.json(product);
}

// put- replacing a object
// patch - updating one or more properties

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //  Validate the rewuest body
  // if invalid return 400
  // fetch the user with the gieven id
  // if doesnt exist, return 404
  // update the user
  // return the updated user

  const body = await request.json();

  const product = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  if (!body.name)
    return NextResponse.json({ error: " Name is required" }, { status: 400 });

  if (!body.price)
    return NextResponse.json({ error: " Price is required" }, { status: 400 });

  const updatedProduct = await prisma.products.update({
    where: { id: product.id },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 400 });

  await prisma.products.delete({
    where: { id: product.id },
  });

  return NextResponse.json({});
}
