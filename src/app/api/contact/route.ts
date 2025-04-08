import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the required fields
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new contact message in the database
    const newContactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact message stored successfully",
        data: newContactMessage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error storing contact message:", error);
    return NextResponse.json(
      { error: "Failed to store contact message" },
      { status: 500 }
    );
  }
}
