# Portfolio Website Deployment Guide

## Option 1: Deploy to Vercel (Recommended)

### Prerequisites
1. Create a [Vercel account](https://vercel.com/signup)
2. Install Vercel CLI (optional but helpful):
   ```bash
   npm install -g vercel
   ```

### Steps to Deploy

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Set Environment Variables**:
   - In your Vercel project dashboard, go to Settings → Environment Variables
   - Add: `RESEND_API_KEY` with your Resend API key value

4. **Deploy**:
   - Click "Deploy" and wait for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Alternative: Deploy via CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts to link your project
```

## Option 2: Deploy to Netlify

### Steps:
1. Create a [Netlify account](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variable: `RESEND_API_KEY`

## Option 3: Deploy to Railway

### Steps:
1. Create a [Railway account](https://railway.app)
2. Connect your GitHub repository
3. Add environment variable: `RESEND_API_KEY`
4. Deploy automatically

## Environment Variables Setup

### Required Environment Variables:
- `RESEND_API_KEY`: Your Resend API key for email functionality

### How to get Resend API Key:
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy the key and add it to your deployment platform

## Post-Deployment Checklist

- [ ] Test the contact form functionality
- [ ] Verify all images and assets load correctly
- [ ] Check mobile responsiveness
- [ ] Test dark/light theme switching
- [ ] Verify email notifications are working
- [ ] Update any hardcoded URLs to your new domain

## Custom Domain Setup

### Vercel:
1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records

## Troubleshooting

### Common Issues:
1. **Build fails**: Check if all dependencies are in package.json
2. **Email not working**: Verify RESEND_API_KEY is set correctly
3. **Images not loading**: Ensure all image paths are correct
4. **Styling issues**: Check if Tailwind CSS is building properly

### Build Commands:
```bash
# Test build locally
npm run build

# Test production server
npm run start
```

## Performance Optimization

After deployment, consider:
1. Optimizing images
2. Enabling compression
3. Setting up CDN
4. Implementing caching strategies 