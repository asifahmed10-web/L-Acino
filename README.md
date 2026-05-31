# L'Acino - Authentic Piedmontese Restaurant Website

A modern, luxury restaurant website for L'Acino, an authentic Piedmontese restaurant located in Turin, Italy.

## 🍷 Overview

L'Acino is a hidden gem offering authentic North-Western Italian cuisine with exceptional wines, exceptional desserts, and great coffee. Our website showcases the restaurant's offerings, ambience, and allows customers to make reservations.

## 📍 Restaurant Details

- **Name**: L'Acino
- **Type**: Piedmontese Restaurant
- **Address**: Via San Domenico, 2/A, 10122 Torino, Italy
- **Phone**: +39 345 139 2770
- **Email**: lacinorestaurant@libero.it
- **Hours**: 7:15 PM – 11:00 PM
- **Rating**: 4.6★ (1,284 reviews)
- **Price Range**: €30–50

## ✨ Features

### Website Sections
1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About** - Restaurant story, highlights, and key information
3. **Menu** - Specialties including antipasti, meats, pasta, wines, and desserts
4. **Ambience** - Experience highlights (cosy, romantic, accessible, family-friendly)
5. **Services** - Dine-in, takeaway, catering, parking, and payment options
6. **Contact** - Location, phone, email, and social media links
7. **Reservation** - Form to book a table
8. **Footer** - Quick links and contact information

### Design Features
- **Modern & Luxury Aesthetic** - Premium design with smooth animations
- **Color Scheme**:
  - Deep Wine Red: #722F37
  - Rustic Terracotta: #C85A3A
  - Cream Background: #FBF7F0
  - Gold Accents: #D4AF37
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations** - Professional transitions and hover effects
- **Accessibility** - WCAG compliant with proper semantic HTML
- **Font Styling**:
  - Headlines: Playfair Display (elegant serif)
  - Body: Lato (clean and modern)

## 🛠 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (Vanilla)** - No dependencies, lightweight interactivity
- **Font Awesome** - Icons
- **Google Fonts** - Premium typography

## 📁 File Structure

```
L-Acino/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
└── README.md           # This file
```

## 🚀 Getting Started

### Local Development
1. Clone the repository:
```bash
git clone https://github.com/asifahmed10-web/L-Acino.git
cd L-Acino
```

2. Open in your browser:
- Simply double-click `index.html` or
- Use a live server: `python -m http.server 8000`

### Deployment with Vercel

1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select the L-Acino repository
   - Click "Import"

2. **Configure Build Settings**
   - Framework: Other (Static Site)
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Click "Deploy"

3. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## 📋 Deployment Steps

### Step 1: Connect to Vercel
```
1. Visit https://vercel.com/signup
2. Sign up with GitHub account
3. Choose "Continue with GitHub"
4. Authorize Vercel
```

### Step 2: Import Project
```
1. Click "New Project"
2. Select "Import Git Repository"
3. Paste: https://github.com/asifahmed10-web/L-Acino
4. Click "Continue"
```

### Step 3: Configure Project
```
Framework Preset: Other
Root Directory: ./
Build Command: (empty)
Install Command: (empty)
Output Directory: (empty)
```

### Step 4: Deploy
```
1. Click "Deploy"
2. Wait for deployment to complete (2-3 minutes)
3. Get your live URL
```

## 📧 Reservation System

Currently, the reservation form displays confirmation messages. To enable email notifications:

1. **Option A: Using Vercel Functions**
   - Create API endpoint for email handling
   - Use services like SendGrid or Mailgun

2. **Option B: Using Third-party Services**
   - Formspree.io
   - Basin.io
   - Netlify Forms

3. **Option C: Backend Integration**
   - Set up Node.js/Express backend
   - Implement email sending with Nodemailer
   - Deploy on railway.app or render.com

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --wine-red: #722F37;
    --terracotta: #C85A3A;
    --cream: #FBF7F0;
    --gold: #D4AF37;
}
```

### Update Restaurant Info
Edit the contact details in `index.html`:
- Address
- Phone number
- Email
- Hours
- Social media links

### Add Photos
Replace placeholder content with images by:
1. Adding an `images` folder
2. Inserting `<img>` tags in HTML
3. Styling with CSS

## ⚡ Performance Optimization

- Lazy loading for images
- Minified CSS and JavaScript
- Optimized font loading
- Smooth scrolling behavior
- Efficient animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Optimization

- Semantic HTML5
- Meta tags and descriptions
- Structured data (Schema.org)
- Mobile-friendly design
- Fast loading times

## 📞 Support & Contact

**Restaurant Contact:**
- Phone: +39 345 139 2770
- Email: lacinorestaurant@libero.it
- Location: Via San Domenico, 2/A, 10122 Torino, Italy
- Website: [Your Vercel URL]
- Facebook: facebook.com/lacinorestaurant
- Google Maps: [View Location](https://maps.app.goo.gl/E6hno1nHA2FWijqK9)

## 📄 License

MIT License - Feel free to use and modify for your needs.

## 🙏 Credits

Created with ❤️ for L'Acino Restaurant

---

**Enjoy your visit to L'Acino!** 🍽️🍷
