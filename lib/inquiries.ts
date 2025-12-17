import { InquirySubmission } from "@/types/inventory";
import fs from "fs";
import path from "path";

const INQUIRIES_DIR = path.join(process.cwd(), "inquiries");

export function saveInquiry(inquiry: Omit<InquirySubmission, "id" | "timestamp">): string {
  // Ensure directory exists
  if (!fs.existsSync(INQUIRIES_DIR)) {
    fs.mkdirSync(INQUIRIES_DIR, { recursive: true });
  }

  const id = `inquiry-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const timestamp = new Date().toISOString();

  const submission: InquirySubmission = {
    id,
    timestamp,
    ...inquiry,
  };

  const filePath = path.join(INQUIRIES_DIR, `${id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(submission, null, 2));

  return id;
}
