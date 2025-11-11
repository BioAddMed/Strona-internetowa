/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true, serverActions: true },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // jeśli używasz obrazów z Canvy lub zewnętrznych serwerów, dopisz domeny tutaj
      { protocol: 'https', hostname: '**', pathname: '/**' }
    ]
  }
}

module.exports = nextConfig
