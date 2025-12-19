# Simple Email Setup Guide 📧

## You DON'T Need a New Email Address!

You can use **your existing email** (Gmail, Outlook, etc.) to receive inquiries. Here's the simple setup:

---

## Step-by-Step Setup (5 Minutes)

### Step 1: Create Free Resend Account
1. Go to **https://resend.com**
2. Click "Sign Up" (it's free)
3. Use your existing email address (Gmail, Outlook, etc.)
4. Verify your email when they send you a confirmation

### Step 2: Get Your API Key
1. After logging in, click **"API Keys"** in the left menu
2. Click **"Create API Key"**
3. Give it a name like "Markhor Website"
4. **Copy the key** - it looks like: `re_1234567890abcdef...`
   - ⚠️ **Copy it now** - you won't see it again!

### Step 3: Add to Vercel (The Easy Part)
1. Go to **https://vercel.com/dashboard**
2. Click on your **Markhor** project
3. Click **"Settings"** (top menu)
4. Click **"Environment Variables"** (left sidebar)
5. Click **"Add New"** button

Now add these **3 variables** one by one:

#### Variable 1: API Key
- **Name:** `RESEND_API_KEY`
- **Value:** Paste the API key you copied (starts with `re_...`)
- **Environment:** Select all (Production, Preview, Development)
- Click **"Save"**

#### Variable 2: Your Email (Where to Receive Inquiries)
- **Name:** `NOTIFICATION_EMAIL`
- **Value:** Your email address (e.g., `yourname@gmail.com`)
- **Environment:** Select all
- Click **"Save"**

#### Variable 3: From Email (Can Use Test Domain)
- **Name:** `FROM_EMAIL`
- **Value:** `onboarding@resend.dev` (Resend's test domain - works immediately)
- **Environment:** Select all
- Click **"Save"**

### Step 4: Redeploy
1. Go to **"Deployments"** tab in Vercel
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Wait 1-2 minutes for it to finish

---

## ✅ That's It!

Now when someone submits an inquiry:
- ✅ You'll get an **email** in your inbox
- ✅ The email will show all customer details
- ✅ You can reply directly to the customer

---

## Using Your Own Domain Email (Optional - Later)

If you want emails to come from `noreply@yourdomain.com` instead of `onboarding@resend.dev`:

1. In Resend dashboard, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `yourdomain.com`)
4. Add the DNS records they provide to your domain
5. Wait for verification (usually 5-10 minutes)
6. Update `FROM_EMAIL` in Vercel to: `noreply@yourdomain.com`

**But this is optional!** The test domain works perfectly for now.

---

## Quick Test

After setup:
1. Go to your live website
2. Submit a test inquiry
3. Check your email inbox
4. You should see the inquiry email within seconds!

---

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify environment variables are saved in Vercel
- Make sure you redeployed after adding variables
- Check Vercel logs for any errors

**Want to test without Resend?**
- The form still works!
- Check Vercel logs to see inquiries
- Set up email later when ready

---

## Summary

- ✅ Use your **existing email** (Gmail, etc.)
- ✅ No need to create new email addresses
- ✅ Free Resend account (3,000 emails/month)
- ✅ Takes 5 minutes to set up
- ✅ Works immediately after redeploy

**You're all set!** 🎉
