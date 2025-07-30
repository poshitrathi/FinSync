# Vercel Deployment Guide

## Required Environment Variables

Make sure to set these environment variables in your Vercel project settings:

### Database
- `DATABASE_URL` - Your PostgreSQL connection string
- `DIRECT_URL` - Direct connection to your database (for Prisma)

### Authentication
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key
- `CLERK_SECRET_KEY` - Clerk secret key
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL` - Sign-in URL (e.g., `/sign-in`)
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL` - Sign-up URL (e.g., `/sign-up`)
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` - Redirect after sign-in (e.g., `/dashboard`)
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` - Redirect after sign-up (e.g., `/dashboard`)

### Security
- `ARCJET_KEY` - Arcjet API key for security protection

### Email (Optional)
- `RESEND_API_KEY` - Resend API key for email functionality

### AI (Optional)
- `GEMINI_API_KEY` - Google Gemini API key for AI insights

### Background Jobs
- `INNGEST_EVENT_KEY` - Inngest event key for background jobs
- `INNGEST_SIGNING_KEY` - Inngest signing key

## Build Configuration

The project is configured with:
- Custom build command: `npm run vercel-build`
- Prisma client generation during build
- Proper error handling for server components

## Troubleshooting

### 502 Errors
1. Check that all required environment variables are set
2. Verify database connection string is correct
3. Ensure Prisma client is generated during build
4. Check Vercel function logs for specific errors

### Server Component Render Errors
1. Verify all async functions have proper error handling
2. Check that database queries return expected data types
3. Ensure all required dependencies are installed

### Database Connection Issues
1. Verify `DATABASE_URL` and `DIRECT_URL` are correct
2. Check that your database is accessible from Vercel's servers
3. Ensure database schema is up to date

## Common Issues

1. **Missing Environment Variables**: All required env vars must be set in Vercel
2. **Database Connection**: Ensure your database is accessible and has the correct schema
3. **Prisma Client**: The client is generated during build, ensure no caching issues
4. **Middleware Errors**: Check that Arcjet and Clerk keys are valid

## Deployment Checklist

- [ ] All environment variables set in Vercel
- [ ] Database is accessible and schema is up to date
- [ ] Prisma migrations have been applied
- [ ] All dependencies are properly installed
- [ ] Build completes successfully
- [ ] Functions deploy without errors
- [ ] Application loads without 502 errors 