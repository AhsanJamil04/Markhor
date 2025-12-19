# Email Notifications Setup Guide

## ✅ Your Form IS Active - Here's How to Receive Inquiries

The inquiry form **works perfectly** on Vercel. You have **3 ways** to receive inquiries:

### Option 1: Email Notifications (Recommended) 📧

Set up email notifications so you receive every inquiry directly in your inbox.

#### Step 1: Create a Resend Account (Free)
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (3,000 emails/month free)
3. Verify your email

#### Step 2: Get Your API Key
1. In Resend dashboard, go to "API Keys"
2. Create a new API key
3. Copy the key (starts with `re_...`)

#### Step 3: Add to Vercel
1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add these variables:

```
RESEND_API_KEY=re_your_api_key_here
NOTIFICATION_EMAIL=your-email@example.com
FROM_EMAIL=noreply@yourdomain.com
```

**Note:** For `FROM_EMAIL`, you can use:
- Your verified domain email (best): `noreply@yourdomain.com`
- Or Resend's test domain: `onboarding@resend.dev` (for testing)

#### Step 4: Redeploy
After adding environment variables, redeploy your site on Vercel.

**That's it!** Now every inquiry will be emailed to you automatically.

---

### Option 2: Check Vercel Logs (Always Available) 📋

Even without email setup, you can see all inquiries:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click "Functions" tab
4. Click on `/api/inquiries` function
5. View "Logs" - you'll see all inquiries formatted clearly

**Every inquiry is logged with:**
- Customer name
- Country
- Contact method
- Item of interest
- Full message
- Timestamp

---

### Option 3: Webhook Integration (Advanced) 🔗

If you use Zapier, Make.com, or similar:

1. In Vercel, add environment variable:
   ```
   WEBHOOK_URL=https://your-webhook-url.com
   ```

2. Inquiries will be sent to your webhook automatically

---

## Current Status

✅ **Form is ACTIVE** - Works perfectly on Vercel
✅ **Submissions are CAPTURED** - Every inquiry is saved
✅ **Logs are AVAILABLE** - View in Vercel dashboard
📧 **Email is OPTIONAL** - Set up for instant notifications

## Testing

To test if everything works:
1. Submit a test inquiry on your live site
2. Check Vercel logs immediately
3. If email is set up, check your inbox

**The form is production-ready!** You just need to check Vercel logs or set up email for notifications.
