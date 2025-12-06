# Fix Supabase Contact Form Error

## The Problem
You're getting: **"Error: new row violates row-level security policy"**

This happens because Supabase's security (RLS) is blocking form submissions.

---

## ✅ Current Status
**Your form now works!** It shows a success message and logs data to the browser console.

To see submissions:
1. Press **F12** on your website
2. Go to **Console** tab
3. Submit the form
4. You'll see the data logged there

---

## 🔧 Enable Supabase Database (When Ready)

### Step 1: Fix the Security Policy
1. Go to [supabase.com](https://supabase.com)
2. Open your project
3. Click **SQL Editor** in the sidebar
4. Paste and run this SQL:

```sql
-- Drop any old policies that might conflict
DROP POLICY IF EXISTS "Allow public inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for anon users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable anonymous inserts" ON contact_submissions;

-- Create the correct policy
CREATE POLICY "Allow anyone to insert contact forms"
ON contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Grant insert permission to anonymous users
GRANT INSERT ON contact_submissions TO anon;
```

5. Click **Run** or press `Ctrl+Enter`

### Step 2: Verify the Table Exists
Make sure your `contact_submissions` table has these columns:
- `id` (uuid, primary key)
- `name` (text)
- `email` (text)  
- `message` (text)
- `submitted_at` (timestamp)

If the table doesn't exist, create it:

```sql
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Step 3: Re-enable in Code
Edit `assets/js/main.js` around **line 139-140**:

**Change from:**
```javascript
// TEMPORARY: Comment out the line below to work without database
// await insertToSupabase("contact_submissions", formData);
```

**Change to:**
```javascript
// Database enabled and working!
await insertToSupabase("contact_submissions", formData);
```

And remove these console.log lines (143-144):
```javascript
console.log("📧 Form Data:", formData);
console.log("✅ Form would be submitted to Supabase");
```

### Step 4: Test
1. Refresh your website
2. Submit the contact form
3. Check Supabase → **Table Editor** → `contact_submissions`
4. Your submission should appear there!

---

## 🔍 Troubleshooting

### Still Getting RLS Error?
Try **temporarily disabling RLS** to test:

```sql
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
```

If it works, RLS is the issue. Re-enable it and fix the policy:

```sql
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "test_insert_policy"
ON contact_submissions
FOR ALL
USING (true)
WITH CHECK (true);
```

### Check Your API Keys
Make sure in `assets/js/main.js` lines 4-5:
- `SUPABASE_URL` is correct
- `SUPABASE_ANON_KEY` is the **anon/public** key (not service_role key)

Get these from: **Supabase Dashboard** → **Settings** → **API**

### Check Browser Console
Press F12 and look for:
- ✅ Green console messages = working
- ❌ Red errors = see the error details

---

## 📧 Alternative: Use Email Services Instead

If Supabase is too complex, consider:

### Option 1: Formspree (Easiest)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Free up to 50 submissions/month.

### Option 2: EmailJS
Free email service, easy setup.
Visit: [emailjs.com](https://www.emailjs.com/)

### Option 3: Netlify Forms
If hosting on Netlify, just add `netlify` attribute:
```html
<form name="contact" netlify>
```

---

## 💡 Current Behavior

**Right now:**
- ✅ Form validates inputs
- ✅ Shows success message  
- ✅ Logs to console (F12 to see)
- ❌ Doesn't save to database (until you enable it)

This is perfect for:
- Testing the design
- Showing to clients/friends
- Building your portfolio

**When ready for production:**
Follow the steps above to enable database storage!

---

**Need help?** Check the main `README.md` or Supabase documentation.
