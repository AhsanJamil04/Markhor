import { NextRequest, NextResponse } from "next/server";
import { saveInquiry } from "@/lib/inquiries";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, country, contactMethod, itemOfInterest, message } = body;

    // Validate required fields
    if (!fullName || !country || !contactMethod || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save inquiry
    const inquiryId = saveInquiry({
      fullName,
      country,
      contactMethod,
      itemOfInterest: itemOfInterest || "",
      message,
    });

    return NextResponse.json(
      { success: true, id: inquiryId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving inquiry:", error);
    return NextResponse.json(
      { error: "Failed to save inquiry" },
      { status: 500 }
    );
  }
}
