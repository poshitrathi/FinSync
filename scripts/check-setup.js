#!/usr/bin/env node

const requiredEnvVars = [
  'DATABASE_URL',
  'DIRECT_URL',
  'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
  'CLERK_SECRET_KEY',
  'GEMINI_API_KEY',
  'ARCJET_KEY',
  'INNGEST_EVENT_KEY',
  'INNGEST_SIGNING_KEY',
  'RESEND_API_KEY'
];

console.log('🔍 Checking FinSync Setup...\n');

let allGood = true;

// Check environment variables
console.log('📋 Environment Variables:');
requiredEnvVars.forEach(envVar => {
  const value = process.env[envVar];
  const status = value ? '✅' : '❌';
  const display = value ? '(configured)' : '(missing)';
  
  console.log(`  ${status} ${envVar} ${display}`);
  
  if (!value) {
    allGood = false;
  }
});

console.log('\n🔗 Service Connections:');

// Check database connection
try {
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  
  prisma.$connect()
    .then(() => {
      console.log('  ✅ Database (connected)');
    })
    .catch(() => {
      console.log('  ❌ Database (connection failed)');
      allGood = false;
    })
    .finally(() => {
      prisma.$disconnect();
    });
} catch (error) {
  console.log('  ❌ Database (Prisma not configured)');
  allGood = false;
}

// Check if development keys are being used
if (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.includes('test_')) {
  console.log('  ⚠️  Clerk (using development keys)');
} else if (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  console.log('  ✅ Clerk (production keys)');
}

console.log('\n📝 Recommendations:');

if (!allGood) {
  console.log('  1. Copy .env.local.example to .env.local');
  console.log('  2. Fill in all required environment variables');
  console.log('  3. Run `npm run dev` to start the development server');
} else {
  console.log('  🎉 All checks passed! You\'re ready to go.');
}

console.log('\n🔗 Useful Links:');
console.log('  • Supabase: https://supabase.com/dashboard');
console.log('  • Clerk: https://dashboard.clerk.com');
console.log('  • Gemini API: https://makersuite.google.com/app/apikey');
console.log('  • Arcjet: https://app.arcjet.com');
console.log('  • Inngest: https://app.inngest.com');
console.log('  • Resend: https://resend.com/api-keys');