/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'randomuser.me',
      'https://zdswivpqybrgbbnziwmu.supabase.co', // replace with your real Supabase domain
      'cdn.jsdelivr.net',              // example: if using jsDelivr
      'vercel.app',                    // if loading images from deployed assets
      'avatars.githubusercontent.com'  // if loading from GitHub
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@prisma/client');
    }
    return config;
  },
};

export default nextConfig;
