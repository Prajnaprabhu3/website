/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects() {
    return [
      {
        source: '/qr',
        destination: 'https://reviewpad.com/qr',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
