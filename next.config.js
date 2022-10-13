const CopyPlugin = require('copy-webpack-plugin');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['github.blog'],
    deviceSizes: [320, 640, 1080, 1200],
    imageSizes: [64, 128],
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: [{ loader: '@svgr/webpack' }, { loader: 'url-loader' }],
    });

    return config;
  },
});

module.exports = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/invite/J4tJj3wfgF',
        permanent: false,
        basePath: false
      },
      {
        source: '/press-kit',
        destination: 'https://reviewpad.notion.site/Reviewpad-Press-Kit-22dde040bb8d4204922619bcd7d137c2',
        permanent: false,
        basePath: false
      },
    ]
  },
}