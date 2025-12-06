# Image Assets

## Required Images

Place your images in this folder with the following names:

### Project Images (1200x800px recommended)
- `project1.jpg` - E-commerce Platform screenshot
- `project2.jpg` - Task Management App screenshot
- `project3.jpg` - Weather Dashboard screenshot
- `project4.jpg` - Portfolio CMS screenshot
- `project5.jpg` - Social Media Dashboard screenshot
- `project6.jpg` - AI Chatbot screenshot

### Blog Images (800x600px recommended)
- `blog1.jpg` - React Hooks article image
- `blog2.jpg` - Node.js API article image
- `blog3.jpg` - CSS Grid vs Flexbox article image

## Image Guidelines

### Recommended Specifications
- **Format**: JPG, PNG, or WebP
- **Project Images**: 1200x800px (3:2 aspect ratio)
- **Blog Images**: 800x600px (4:3 aspect ratio)
- **File Size**: Keep under 500KB for fast loading
- **Quality**: 80-90% JPEG quality is sufficient

### Optimization Tips
1. **Use online tools** to compress images:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. **Convert to WebP** for better compression:
   - WebP provides 25-35% better compression than JPEG
   - All modern browsers support WebP

3. **Use responsive images** (optional advanced):
   - Create multiple sizes (small, medium, large)
   - Use `<picture>` element or `srcset` attribute

## Placeholder Images

If you don't have images yet, you can use free placeholder services:

### Free Stock Photo Sites
- [Unsplash](https://unsplash.com/)
- [Pexels](https://pexels.com/)
- [Pixabay](https://pixabay.com/)

### Placeholder Image Services
- [Lorem Picsum](https://picsum.photos/) - Random images
- [Placeholder.com](https://placeholder.com/) - Solid color placeholders
- [Placehold.co](https://placehold.co/) - Custom placeholders

### Example: Using Lorem Picsum
Replace image src in HTML:
```html
<!-- Project images -->
<img src="https://picsum.photos/1200/800?random=1" alt="Project 1">
<img src="https://picsum.photos/1200/800?random=2" alt="Project 2">

<!-- Blog images -->
<img src="https://picsum.photos/800/600?random=3" alt="Blog Post 1">
```

## Current Status

- [ ] project1.jpg
- [ ] project2.jpg
- [ ] project3.jpg
- [ ] project4.jpg
- [ ] project5.jpg
- [ ] project6.jpg
- [ ] blog1.jpg
- [ ] blog2.jpg
- [ ] blog3.jpg

## Notes

- Images are not tracked in git by default (see `.gitignore`)
- Add your actual images before deploying to production
- Consider using a CDN for better performance in production
