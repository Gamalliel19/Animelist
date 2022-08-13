/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const images = {
  domains: ['s4.anilist.co'],
};

module.exports = { nextConfig, images };
// module.exports = {
//   images: {
//     domains: ['https://s4.anilist.co/'],
//   },
// };
// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(graphql|gql)$/,
//       exclude: /node_modules/,
//       loader: 'graphql-tag/loader',
//     });
//     return config;
//   },
//   webpackDevMiddleware: (config) => {
//     return config;
//   },
//   nextConfig,
// };
