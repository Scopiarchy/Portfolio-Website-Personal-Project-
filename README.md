# Portfolio Website

A modern, fully responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design with smooth animations, dark mode toggle, and Supabase backend integration for contact form submissions.

## Features

### ✨ Sections
- **Hero Section**: Full-screen banner with name, title, and call-to-action buttons
- **About Me**: Bio, skills with animated progress bars, and education
- **Projects**: Responsive grid layout with hover effects and project details
- **Blog**: Article cards with images and external links
- **Contact**: Form with validation and Supabase integration
- **Footer**: Social media links and copyright

### 🎨 Design Features
- Modern, clean UI with smooth animations
- Fully responsive design (mobile, tablet, desktop)
- Light/Dark mode toggle with localStorage persistence
- Smooth scrolling between sections
- Active navigation highlighting
- Hover effects and transitions
- Back-to-top button
- Mobile-friendly hamburger menu

### 🚀 Interactive Elements
- Form validation (name, email, message)
- Contact form submissions stored in Supabase
- Success/error message feedback
- Animated skill progress bars
- Scroll-triggered animations
- Resume download button

## File Structure

```
portfolio-website/
│
├── index.html                 # Main HTML file
├── README.md                  # Documentation
│
├── assets/
│   ├── css/
│   │   └── style.css         # All styles and responsive design
│   │
│   ├── js/
│   │   └── main.js           # JavaScript functionality
│   │
│   ├── images/               # Project, blog, and other images
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   ├── project3.jpg
│   │   ├── project4.jpg
│   │   ├── project5.jpg
│   │   ├── project6.jpg
│   │   ├── blog1.jpg
│   │   ├── blog2.jpg
│   │   └── blog3.jpg
│   │
│   └── resume.pdf            # Your resume file
```

## Setup Instructions

### 1. Customize Content

#### Update Personal Information
Open `index.html` and replace placeholder content with your information:
- Name and title in hero section
- About me bio and education
- Skills and percentages
- Project details (title, description, technologies, links)
- Blog post information
- Contact details (email, phone, location)
- Social media links in footer

#### Add Images
Place your images in the `assets/images/` folder:
- Project screenshots: `project1.jpg` through `project6.jpg`
- Blog post images: `blog1.jpg` through `blog3.jpg`
- You can use any image format (jpg, png, webp)

#### Add Resume
Place your resume PDF in `assets/` folder as `resume.pdf`

### 2. Supabase Setup

#### Create Supabase Project
1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Wait for the project to be fully set up

#### Create Database Table
Run this SQL in Supabase SQL Editor:

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Allow public inserts" ON contact_submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow authenticated users to view all
CREATE POLICY "Allow authenticated users to view" ON contact_submissions
    FOR SELECT
    TO authenticated
    USING (true);
```

#### Get API Credentials
1. In Supabase Dashboard, go to **Settings** → **API**
2. Copy your **Project URL** and **anon/public key**

#### Configure JavaScript
Open `assets/js/main.js` and update lines 5-6:

```javascript
const SUPABASE_CONFIG = {
    url: 'YOUR_SUPABASE_URL',        // Replace with your URL
    anonKey: 'YOUR_SUPABASE_ANON_KEY' // Replace with your anon key
};
```

### 3. Test Locally

Simply open `index.html` in a web browser to test locally. For better testing:

#### Option 1: Using Python
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

#### Option 2: Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Then open http://localhost:8080 in your browser
```

#### Option 3: VS Code Live Server
Install the "Live Server" extension in VS Code and click "Go Live"

## Customization Guide

### Change Color Scheme
Edit CSS variables in `assets/css/style.css` (lines 4-48):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade */
    --primary-light: #818cf8;      /* Lighter shade */
    --secondary-color: #f59e0b;    /* Accent color */
    --accent-color: #10b981;       /* Success/highlight */
}
```

### Add/Remove Projects
In `index.html`, duplicate or remove project card blocks (lines 150-304):

```html
<div class="project-card">
    <!-- Project content -->
</div>
```

### Modify Skills
Update skill items in the About section (lines 84-137 in HTML):

```html
<div class="skill-item">
    <div class="skill-header">
        <span><i class="fab fa-html5"></i> Skill Name</span>
        <span>90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

### Enable Typing Animation
In `assets/js/main.js`, uncomment the typing animation code (lines 354-382)

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push your code
3. Go to **Settings** → **Pages**
4. Select branch and root folder
5. Save and wait for deployment

### Netlify
1. Go to [https://netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Site will be live instantly

### Vercel
1. Go to [https://vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with default settings

### Custom Domain
After deploying, you can connect a custom domain through your hosting provider's settings.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Custom Properties, Animations
- **JavaScript ES6+**: Modules, Async/Await, Fetch API
- **Supabase**: Backend database for contact form
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter, Poppins)

## Optional Enhancements

### Add Google Analytics
Add this to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Email Notifications
Set up a Supabase Edge Function or use services like:
- SendGrid
- Mailgun
- EmailJS
- Resend

### Add More Animations
Consider adding:
- AOS (Animate On Scroll) library
- GSAP for advanced animations
- Particle.js for background effects

## Troubleshooting

### Contact Form Not Working
1. Check Supabase credentials in `main.js`
2. Verify table name is `contact_submissions`
3. Check browser console for errors
4. Ensure Row Level Security policies are set correctly

### Images Not Loading
1. Verify image filenames match HTML references
2. Check image paths are correct
3. Ensure images are in `assets/images/` folder

### Styles Not Applying
1. Check CSS file path in HTML
2. Clear browser cache
3. Verify CSS syntax

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Support

For issues or questions:
- Check the troubleshooting section above
- Review Supabase documentation: [https://supabase.com/docs](https://supabase.com/docs)
- Search for solutions on Stack Overflow

## Credits

- Font Awesome for icons
- Supabase for backend services
- Google Fonts for typography

---

**Made with ❤️ by Janindi Didulakshi**
