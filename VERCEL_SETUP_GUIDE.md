# How to Fill Vercel Environment Variables - Step by Step

## ⚠️ Important: Key vs Value

- **Key** = Variable name (like `RESEND_API_KEY`)
- **Value** = The actual secret/key (like your Resend API key)

---

## Step 1: Add RESEND_API_KEY

### In the Vercel form:

1. **Key field:** Type exactly: `RESEND_API_KEY`

2. **Value field:** Paste your Resend API key here
   - This is the key you copied from Resend (starts with `re_...`)
   - It should look like: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (your actual key - never share this!)

3. **Environments:** Keep it as "Production, Preview, and Development" (all selected)

4. **Sensitive:** Toggle this ON (recommended for security)

5. **Note (optional):** "Resend API key for sending inquiry emails"

6. Click **"Save"** or **"Add"**

---

## Step 2: Add NOTIFICATION_EMAIL

Click **"Add Another"** button, then:

1. **Key field:** Type: `NOTIFICATION_EMAIL`

2. **Value field:** Type your email address
   - Example: `yourname@gmail.com`
   - This is where you'll receive inquiry emails

3. **Environments:** Select all (Production, Preview, Development)

4. **Sensitive:** Toggle OFF (email addresses aren't super sensitive)

5. **Note (optional):** "Email address to receive inquiry notifications"

6. Click **"Save"**

---

## Step 3: Add FROM_EMAIL

Click **"Add Another"** button again, then:

1. **Key field:** Type: `FROM_EMAIL`

2. **Value field:** Type: `onboarding@resend.dev`
   - This is Resend's test domain (works immediately, no setup needed)
   - Later you can change this to `noreply@yourdomain.com` if you verify your domain

3. **Environments:** Select all

4. **Sensitive:** Toggle OFF

5. **Note (optional):** "Sender email address for inquiry notifications"

6. Click **"Save"**

---

## Final Result

You should have **3 environment variables**:

1. ✅ `RESEND_API_KEY` = `re_your_actual_key_here`
2. ✅ `NOTIFICATION_EMAIL` = `your-email@gmail.com`
3. ✅ `FROM_EMAIL` = `onboarding@resend.dev`

---

## After Adding Variables

1. Go to **"Deployments"** tab
2. Click **"..."** on the latest deployment
3. Click **"Redeploy"**
4. Wait 1-2 minutes

---

## Test It

1. Go to your live website
2. Submit a test inquiry
3. Check your email inbox!
4. You should receive the inquiry email within seconds

---

## Common Mistakes to Avoid

❌ **DON'T** put the API key in the Key field
✅ **DO** put `RESEND_API_KEY` in Key field, and the actual key in Value field

❌ **DON'T** forget to redeploy after adding variables
✅ **DO** redeploy so the changes take effect

❌ **DON'T** use different variable names
✅ **DO** use exactly: `RESEND_API_KEY`, `NOTIFICATION_EMAIL`, `FROM_EMAIL`

---

## Quick Reference

| Variable Name | What Goes in Value Field |
|--------------|-------------------------|
| `RESEND_API_KEY` | Your Resend API key (from resend.com dashboard) |
| `NOTIFICATION_EMAIL` | Your email address (where you want to receive inquiries) |
| `FROM_EMAIL` | `onboarding@resend.dev` (or your domain email later) |

---

**That's it!** Once you add these 3 variables and redeploy, you'll start receiving inquiry emails! 🎉
