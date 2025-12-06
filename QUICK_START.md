# Quick Start Guide

Get your portfolio website up and running in 5 simple steps!

## Step 1: Customize Your Content (5 minutes)

Open `index.html` and update:

1. **Hero Section** (lines 39-47)
   - Your name
   - Your title/role
   - Your intro description

2. **About Section** (lines 63-77)
   - Your bio
   - Your education details

3. **Contact Section** (lines 389-403)
   - Your email
   - Your phone
   - Your location

4. **Footer** (lines 443-454)
   - Your social media links (GitHub, LinkedIn, Twitter, Instagram)

## Step 2: Add Your Images (5 minutes)

Add these images to `assets/images/` folder:
- 6 project screenshots: `project1.jpg` to `project6.jpg`
- 3 blog images: `blog1.jpg` to `blog3.jpg`

**Don't have images?** Use placeholders:
```
https://picsum.photos/1200/800?random=1
```

## Step 3: Add Your Resume (2 minutes)

Save your resume as `resume.pdf` in the `assets/` folder.

## Step 4: Set Up Supabase (10 minutes)

### A. Create Account & Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up and create a new project
3. Wait for setup to complete

### B. Create Database Table
In Supabase SQL Editor, run:

```sql
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON contact_submissions
    FOR INSERT TO anon WITH CHECK (true);
```

### C. Get Your Keys
1. Go to **Settings** → **API**
2. Copy:
   - Project URL
   - anon/public key

### D. Update JavaScript
Open `assets/js/main.js` and update lines 5-6:

```javascript
const SUPABASE_CONFIG = {
    url: 'https://your-project.supabase.co',
    anonKey: 'your-anon-key-here'
};
```

## Step 5: Test & Deploy (5 minutes)

### Test Locally
Just open `index.html` in your browser!

### Deploy Online

**Option A: Netlify (Easiest)**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `portfolio-website` folder
3. Done! Your site is live

**Option B: GitHub Pages**
1. Create GitHub repo
2. Push your code
3. Enable Pages in Settings
4. Live in minutes!

**Option C: Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy automatically

---

## ✅ Checklist

Before going live, make sure:

- [ ] Updated name and title in hero section
- [ ] Added your bio and education
- [ ] Added all project images or placeholders
- [ ] Added blog images or placeholders
- [ ] Added your resume PDF
- [ ] Updated contact information
- [ ] Updated social media links
- [ ] Set up Supabase account
- [ ] Created database table
- [ ] Added Supabase keys to JavaScript
- [ ] Tested contact form locally
- [ ] Tested on mobile (use browser DevTools)
- [ ] All links work correctly
- [ ] Deployed to hosting service

---

## 🎨 Optional Customizations

### Change Colors
Edit `assets/css/style.css` lines 4-10:
```css
--primary-color: #6366f1;  /* Your brand color */
```

### Enable Typing Animation
In `assets/js/main.js`, uncomment lines 354-382

### Add Google Analytics
Add tracking code to `<head>` in `index.html`

---

## 🆘 Common Issues

### Images Not Showing
- Check filenames match exactly (case-sensitive)
- Ensure images are in `assets/images/` folder

### Contact Form Not Working
- Verify Supabase keys are correct
- Check browser console for errors
- Test database table exists

### Site Not Loading
- Check all file paths are correct
- Clear browser cache
- Try a different browser

---

## 📚 Need More Help?

- Read the full [README.md](README.md)
- Check [Supabase Docs](https://supabase.com/docs)
- Review JavaScript console errors

---

## 🚀 You're Ready!

Your portfolio website is ready to impress. Good luck! 🎉

**Questions?** Review the detailed README.md for more information.
