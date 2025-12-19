import { InquirySubmission } from "@/types/inventory";
import fs from "fs";
import path from "path";

// Check if we're in a serverless environment (Vercel)
const isServerless = process.env.VERCEL || process.env.NODE_ENV === "production";

async function sendEmailNotification(submission: InquirySubmission) {
  // Only send email if RESEND_API_KEY and NOTIFICATION_EMAIL are set
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFICATION_EMAIL) {
    return false;
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailContent = `
New Inquiry Received - Markhor Extreme Inc.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INQUIRY DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inquiry ID: ${submission.id}
Timestamp: ${submission.timestamp}

CONTACT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${submission.fullName}
Country: ${submission.country}
Preferred Contact: ${submission.contactMethod}

${submission.itemOfInterest ? `Item of Interest: ${submission.itemOfInterest}` : "General Inquiry"}

MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${submission.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please contact the customer using their preferred method: ${submission.contactMethod}

This inquiry was submitted through the Markhor Extreme Inc. website.
    `.trim();

    await resend.emails.send({
      from: process.env.FROM_EMAIL || "noreply@yourdomain.com",
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Inquiry from ${submission.fullName} - ${submission.itemOfInterest || "General Inquiry"}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0284c7;">New Inquiry Received - Markhor Extreme Inc.</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Inquiry ID:</strong> ${submission.id}</p>
            <p><strong>Timestamp:</strong> ${submission.timestamp}</p>
          </div>
          <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1;">Contact Information</h3>
            <p><strong>Name:</strong> ${submission.fullName}</p>
            <p><strong>Country:</strong> ${submission.country}</p>
            <p><strong>Preferred Contact Method:</strong> ${submission.contactMethod}</p>
            ${submission.itemOfInterest ? `<p><strong>Item of Interest:</strong> ${submission.itemOfInterest}</p>` : ""}
          </div>
          <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1;">Message</h3>
            <p style="white-space: pre-wrap;">${submission.message}</p>
          </div>
          <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Action Required:</strong> Please contact the customer using their preferred method: <strong>${submission.contactMethod}</strong></p>
          </div>
        </div>
      `,
    });

    return true;
  } catch (error) {
    console.error("Failed to send email notification:", error);
    return false;
  }
}

async function sendWebhookNotification(submission: InquirySubmission) {
  // Send to webhook if configured
  if (process.env.WEBHOOK_URL) {
    try {
      await fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "new_inquiry",
          data: submission,
        }),
      });
      return true;
    } catch (error) {
      console.error("Webhook error:", error);
    }
  }
  return false;
}

export async function saveInquiry(inquiry: Omit<InquirySubmission, "id" | "timestamp">): Promise<string> {
  const id = `inquiry-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const timestamp = new Date().toISOString();

  const submission: InquirySubmission = {
    id,
    timestamp,
    ...inquiry,
  };

  // Always log to console (visible in Vercel logs)
  console.log("\n" + "=".repeat(60));
  console.log("📧 NEW INQUIRY RECEIVED - Markhor Extreme Inc.");
  console.log("=".repeat(60));
  console.log(`ID: ${id}`);
  console.log(`Timestamp: ${timestamp}`);
  console.log(`Name: ${inquiry.fullName}`);
  console.log(`Country: ${inquiry.country}`);
  console.log(`Contact Method: ${inquiry.contactMethod}`);
  console.log(`Item of Interest: ${inquiry.itemOfInterest || "General Inquiry"}`);
  console.log(`Message: ${inquiry.message}`);
  console.log("=".repeat(60));
  console.log("\n📋 FULL JSON DATA:");
  console.log(JSON.stringify(submission, null, 2));
  console.log("=".repeat(60) + "\n");

  if (isServerless) {
    // In production (Vercel):
    // 1. Try to send email notification (if configured)
    // 2. Try to send webhook (if configured)
    // 3. Always log to console (always available)
    
    const emailSent = await sendEmailNotification(submission);
    const webhookSent = await sendWebhookNotification(submission);
    
    if (emailSent) {
      console.log("✅ Email notification sent successfully");
    } else if (process.env.NOTIFICATION_EMAIL) {
      console.log("⚠️ Email notification failed (check RESEND_API_KEY)");
    } else {
      console.log("ℹ️ Email notifications not configured (set RESEND_API_KEY and NOTIFICATION_EMAIL)");
    }
    
    if (webhookSent) {
      console.log("✅ Webhook notification sent successfully");
    }
  } else {
    // In development, save to file system
    try {
      const INQUIRIES_DIR = path.join(process.cwd(), "inquiries");
      
      if (!fs.existsSync(INQUIRIES_DIR)) {
        fs.mkdirSync(INQUIRIES_DIR, { recursive: true });
      }

      const filePath = path.join(INQUIRIES_DIR, `${id}.json`);
      fs.writeFileSync(filePath, JSON.stringify(submission, null, 2));
      console.log(`✅ Inquiry saved to: ${filePath}`);
      
      // Also try to send email in development if configured
      await sendEmailNotification(submission);
    } catch (error) {
      console.error("Error saving inquiry file:", error);
    }
  }

  return id;
}
