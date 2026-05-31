# Vercel Deployment Guide for L'Acino Restaurant Website

## 📋 Step-by-Step Deployment Instructions

### Prerequisites
- GitHub account with the L-Acino repository
- Vercel account (free tier available)

---

## **STEP 1: Create Vercel Account**

1. Visit [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. Complete your profile setup

---

## **STEP 2: Import Project to Vercel**

### Option A: From Vercel Dashboard (Easiest)

1. After login, click **"New Project"**
2. Click **"Import Git Repository"**
3. Paste your repository URL:
   ```
   https://github.com/asifahmed10-web/L-Acino
   ```
4. Click **"Continue"**

### Option B: Direct Link (Fastest)
Click this link to deploy instantly:
```
https://vercel.com/new/clone?repository-url=https://github.com/asifahmed10-web/L-Acino
```

---

## **STEP 3: Configure Project Settings**

When importing, you'll see configuration options:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Other (Static Site) |
| **Build Command** | (leave empty) |
| **Output Directory** | (leave empty) |
| **Install Command** | (leave empty) |

Click **"Deploy"** and wait for deployment to complete (2-3 minutes).

---

## **STEP 4: Get Your Live URL**

After successful deployment:

✅ Your site will be live at:
```
https://l-acino.vercel.app
```
(or similar - check your Vercel dashboard)

---

## **STEP 5: Connect Custom Domain (Optional)**

If you have your own domain:

1. Go to **Project Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain name (e.g., `lacino-torino.com`)
4. Follow the DNS configuration instructions
5. Update nameservers at your domain registrar

---

## **STEP 6: Enable Auto-Deployment**

Your site will automatically redeploy when you:
- Push changes to GitHub
- Merge pull requests
- Update the main branch

---

## **STEP 7: Set Up Environment Variables (Optional)**

For future features like email notifications:

1. Go to **Settings** → **Environment Variables**
2. Add your variables (e.g., email service keys)
3. Click **"Save"**

---

## **STEP 8: Configure Redirects & Headers (Optional)**

Create a `vercel.json` file for advanced configuration:

```json
{
  "cleanUrls": true,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## **STEP 9: Monitor & Manage**

Your Vercel dashboard shows:
- ✅ Deployment history
- 📊 Analytics
- 🔍 Function logs
- ⚡ Performance metrics

---

## **STEP 10: Share Your Website**

Now you can share:
- **Live URL**: `https://l-acino.vercel.app`
- **Custom Domain**: `https://lacino-torino.com` (if configured)

Share on:
- 📱 Facebook: facebook.com/lacinorestaurant
- 📧 Email newsletter
- 🌐 Google Business Profile
- 📍 Google Maps listing

---

## **Adding Email Notifications to Reservations**

To enable automatic emails when someone books:

### Option 1: FormSubmit.co (Free & Easy)
```javascript
// Update form action in HTML
<form action="https://formsubmit.co/YOUR_EMAIL@gmail.com" method="POST">
```

### Option 2: Vercel Functions + SendGrid
Create `api/send-email.js`:
```javascript
import sgMail from '@sendgrid/mail';

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  const msg = {
    to: 'lacinorestaurant@libero.it',
    from: 'noreply@lacino.com',
    subject: `New Reservation - ${req.body.name}`,
    html: `<h2>Reservation Request</h2>
           <p>Name: ${req.body.name}</p>
           <p>Date: ${req.body.date}</p>
           <p>Time: ${req.body.time}</p>`
  };
  
  await sgMail.send(msg);
  res.json({ success: true });
};
```

### Option 3: Formspree.io (Simple)
1. Visit [formspree.io](https://formspree.io)
2. Sign up for free
3. Create a new form for your email
4. Update form in HTML with Formspree endpoint

---

## **Troubleshooting**

### Site shows 404 error
- ✅ Ensure `index.html` exists in root directory
- ✅ Check that all file paths are correct
- ✅ Verify `vercel.json` configuration (if using)

### Styles not loading
- ✅ Check file paths in HTML (relative paths work better)
- ✅ Verify CSS file is in root directory
- ✅ Clear browser cache (Ctrl+Shift+Delete)

### Slow deployment
- ✅ Push smaller changes more frequently
- ✅ Check GitHub for large file commits
- ✅ Optimize images before uploading

### Build failed
- ✅ Check Vercel build logs for errors
- ✅ Verify all files are properly committed to GitHub
- ✅ Check for syntax errors in HTML/CSS/JS

---

## **Performance Optimization on Vercel**

Vercel automatically provides:
- ⚡ Global CDN for fast delivery
- 🔒 HTTPS/SSL encryption
- 📦 Automatic gzip compression
- 🚀 Edge caching
- 📊 Real-time analytics

---

## **Next Steps**

1. ✅ Deploy to Vercel (this guide)
2. 🎨 Customize content with your photos
3. 📧 Set up email notifications
4. 🔍 Add to Google Search Console
5. 📱 Submit to Google Business Profile
6. 🌍 Promote on social media

---

## **Support**

- **Vercel Help**: https://vercel.com/docs
- **GitHub Issues**: Ask in your repository
- **Restaurant Contact**: +39 345 139 2770

---

## **Deployment Checklist**

- [ ] GitHub account created
- [ ] L-Acino repository cloned/forked
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Settings configured correctly
- [ ] Deployment successful
- [ ] Live URL verified
- [ ] Custom domain added (optional)
- [ ] Email notifications set up (optional)
- [ ] Website shared on social media

---

## **Quick Deploy Button**

Copy this markdown into your GitHub README:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/asifahmed10-web/L-Acino)
```

---

**🎉 Congratulations! Your L'Acino website is now live!**

Visit: **https://l-acino.vercel.app** (or your custom domain)
