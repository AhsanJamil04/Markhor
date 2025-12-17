import { InquirySubmission } from "@/types/inventory";
import fs from "fs";
import path from "path";

// Check if we're in a serverless environment (Vercel)
const isServerless = process.env.VERCEL || process.env.NODE_ENV === "production";

export function saveInquiry(inquiry: Omit<InquirySubmission, "id" | "timestamp">): string {
  const id = `inquiry-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const timestamp = new Date().toISOString();

  const submission: InquirySubmission = {
    id,
    timestamp,
    ...inquiry,
  };

  if (isServerless) {
    // In serverless environment (Vercel), log to console
    // Inquiries can be viewed in Vercel function logs
    console.log("=== NEW INQUIRY ===");
    console.log(JSON.stringify(submission, null, 2));
    console.log("===================");
  } else {
    // In development, save to file system
    try {
      const INQUIRIES_DIR = path.join(process.cwd(), "inquiries");
      
      // Ensure directory exists
      if (!fs.existsSync(INQUIRIES_DIR)) {
        fs.mkdirSync(INQUIRIES_DIR, { recursive: true });
      }

      const filePath = path.join(INQUIRIES_DIR, `${id}.json`);
      fs.writeFileSync(filePath, JSON.stringify(submission, null, 2));
    } catch (error) {
      // Fallback to console logging if file system fails
      console.log("=== NEW INQUIRY ===");
      console.log(JSON.stringify(submission, null, 2));
      console.log("===================");
    }
  }

  return id;
}
