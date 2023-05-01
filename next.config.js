/** @type {import('next').NextConfig} */
import nextTranslate from 'next-translate';

const nextConfig = nextTranslate({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/game/rules',
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jtefeyxtvoloibgobpss.supabase.co',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/api/**',
      },
    ],
  },
});

export default nextConfig;
