# Email Setup Guide

## Prerequisites

1. **Resend Account**: Sign up at [resend.com](https://resend.com)
2. **API Key**: Get your API key from the Resend dashboard

## Setup Instructions

### 1. Create Environment File

Create a `.env.local` file in your project root and add your Resend API key:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### 2. Get Your Resend API Key

1. Go to [resend.com](https://resend.com) and sign up/login
2. Navigate to the API Keys section in your dashboard
3. Create a new API key
4. Copy the API key and paste it in your `.env.local` file

### 3. Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. In your Resend dashboard, go to Domains
2. Add and verify your domain
3. Update the `from` field in `/app/api/send-email/route.js` to use your verified domain

### 4. Test the Email Functionality

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email (fikreselassieeshetu.seid@etud.univ-evry.fr) for the message

## Features Added

- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Email sending via Resend API
- ✅ Responsive design
- ✅ Dark/light theme support
- ✅ Animated feedback

## Troubleshooting

### Common Issues

1. **"Failed to send email" error**: Check your API key and make sure it's correct
2. **Environment variable not found**: Restart your development server after adding the `.env.local` file
3. **Rate limiting**: Resend has rate limits, check your dashboard for usage

### Development vs Production

- **Development**: Uses `onboarding@resend.dev` as sender (limited to 100 emails/day)
- **Production**: Should use your verified domain for better deliverability

## Security Notes

- Never commit your `.env.local` file to version control
- The API key is only used server-side in the API route
- Form validation prevents empty submissions
- Email content is sanitized before sending 