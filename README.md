# Safi Ullah Khan - Information Security Engineer Portfolio

A modern, professional portfolio website showcasing expertise in cybersecurity, SOC operations, and threat detection.

**Live Demo:** [Deploy to Netlify](#deployment)

---

## Features

✨ **Modern Design**
- Minimalist security-first aesthetic
- Neon cyan accents on dark slate background
- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations

🔒 **Professional Content**
- Comprehensive experience timeline
- Detailed technical skills (9 categories)
- Education and certifications
- Publications and research
- Featured projects

⚡ **Performance**
- Static site (no server needed)
- Optimized build (~368KB HTML)
- CDN-ready deployment
- Fast page loads

🌍 **Easy Deployment**
- One-click Netlify deployment
- Cloudflare integration ready
- Free SSL/HTTPS
- Custom domain support

---

## Quick Start

### Prerequisites

- Node.js 20+ (or use nvm)
- pnpm package manager

### Installation

```bash
# Clone or navigate to project
cd safi-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` in your browser.

### Build for Production

```bash
# Create optimized build
pnpm build

# Preview production build
pnpm preview
```

The `dist/public` folder is ready for deployment.

---

## Project Structure

```
safi-portfolio/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx           # Main portfolio page
│   │   │   └── NotFound.tsx       # 404 page
│   │   ├── components/            # Reusable UI components
│   │   ├── contexts/              # React contexts
│   │   ├── lib/                   # Utility functions
│   │   ├── App.tsx                # Main app component
│   │   ├── main.tsx               # React entry point
│   │   └── index.css              # Global styles + Tailwind
│   ├── index.html                 # HTML template
│   └── public/                    # Static assets
├── server/                        # Express server (production)
├── dist/                          # Build output (created after pnpm build)
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── DEPLOYMENT_GUIDE.md            # Netlify/Cloudflare setup
└── README.md                      # This file
```

---

## Design Philosophy

This portfolio follows a **Minimalist Security-First** design approach:

**Core Principles:**
- Extreme clarity and information hierarchy
- Security-inspired visual language (shield/lock motifs)
- Monochromatic base with strategic neon cyan accents
- Data-driven layout emphasizing expertise

**Color Palette:**
- Primary: Deep slate (#0f172a) - Authority and trust
- Accent: Neon cyan (#00d9ff) - Technical sophistication
- Secondary: Warm gray (#f5f5f5) - Breathing room

**Typography:**
- Display: IBM Plex Mono (technical credibility)
- Body: Inter (modern readability)
- Hierarchy: 48px → 32px → 16px

---

## Customization

### Update Personal Information

Edit `client/src/pages/Home.tsx`:

```tsx
// Update contact information
const experiences = [
  {
    title: "Your Title",
    company: "Your Company",
    location: "Your Location",
    period: "Start – End",
    highlights: ["Achievement 1", "Achievement 2"]
  }
];

// Update skills
const skills = [
  { category: "Your Category", items: ["Skill 1", "Skill 2"] }
];
```

### Change Colors

Edit `client/src/index.css`:

```css
:root {
  --primary: #00d9ff;              /* Change accent color */
  --background: #0f172a;           /* Change background */
  --foreground: #e2e8f0;           /* Change text color */
}
```

### Update Fonts

Edit `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap" rel="stylesheet" />
```

Then update `client/src/index.css`:

```css
h1, h2, h3 {
  font-family: 'Your Font', sans-serif;
}
```

---

## Sections Overview

### Hero Section
- Eye-catching introduction
- Call-to-action buttons
- Contact information

### Experience Timeline
- Professional positions
- Key achievements
- Timeline visualization

### Skills
- 9 skill categories
- Technical expertise
- Interactive badges

### Education
- Degree information
- Certifications
- Awards and recognition

### Publications
- Research papers
- Published work
- Academic contributions

### Projects
- Featured projects
- Project descriptions
- Technology tags

### Contact
- Email, LinkedIn, GitHub
- Call-to-action section

---

## Deployment

### Deploy to Netlify (Recommended)

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

**Quick Deploy:**

1. Push code to GitHub
2. Connect GitHub to Netlify
3. Netlify auto-deploys on every push
4. Get free `.netlify.app` domain
5. Add custom domain (optional)

### Deploy with Cloudflare

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for Cloudflare DNS setup.

**Benefits:**
- Global CDN
- DDoS protection
- Web Application Firewall
- Image optimization
- Analytics

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Routing** | Wouter |
| **Icons** | Lucide React |
| **Build Tool** | Vite |
| **Language** | TypeScript |
| **Package Manager** | pnpm |
| **Deployment** | Netlify (static) |

---

## Performance Metrics

- **Build size:** ~368KB (HTML)
- **CSS size:** ~118KB (minified)
- **JS size:** ~558KB (minified)
- **Load time:** < 2 seconds (with CDN)
- **Lighthouse Score:** 95+ (Performance)

---

## Browser Support

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## SEO Optimization

- Meta tags for title, description, keywords
- Semantic HTML structure
- Mobile-responsive design
- Fast page load times
- Structured data ready

---

## Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support
- ARIA labels where needed

---

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check

# Format code
pnpm format

# Build and start server
pnpm start
```

---

## Troubleshooting

### Port 3000 already in use

```bash
# Use a different port
pnpm dev -- --port 3001
```

### Build fails

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Styles not applying

```bash
# Hard refresh browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

---

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section for security articles
- [ ] Contact form with email notifications
- [ ] GitHub projects integration
- [ ] Resume download button
- [ ] Testimonials section
- [ ] Speaking engagements
- [ ] Social media links

---

## License

© 2026 Safi Ullah Khan. All rights reserved.

---

## Support

For deployment help, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

For technical issues:
1. Check browser console (F12)
2. Review build logs
3. Test locally with `pnpm dev`
4. Clear cache and hard refresh

---

## Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Cloudflare Documentation](https://developers.cloudflare.com)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Ready to deploy?** Start with [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) 🚀
