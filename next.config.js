/** @type {import('next').NextConfig} */
import nextTranslate from 'next-translate';

const nextConfig = nextTranslate({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/rules',
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.toto.com',
        pathname: '/api/**',
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
