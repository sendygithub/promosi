import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const artikel = await prisma.artikel.findUnique({
      where: { id: params.id },
    });

    if (!artikel) {
      return NextResponse.json({ error: "Artikel not found" }, { status: 404 });
    }

    return NextResponse.json(artikel);
  } catch (error) {
    console.error("Error fetching artikel:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// Update Artikel (PUT)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const body = await request.json();

    const existingArtikel = await prisma.artikel.findUnique({
      where: { id: params.id },
    });

    if (!existingArtikel) {
      return NextResponse.json({ error: "Artikel not found" }, { status: 404 });
    }

    const artikel = await prisma.artikel.update({
      where: { id: params.id },
      data: body,
    });

    return NextResponse.json(artikel);
  } catch (error) {
    console.error("Error updating artikel:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// Delete Artikel (DELETE)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const existingArtikel = await prisma.artikel.findUnique({
      where: { id: params.id },
    });

    if (!existingArtikel) {
      return NextResponse.json({ error: "Artikel not found" }, { status: 404 });
    }

    await prisma.artikel.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { message: "Artikel deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting artikel:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
