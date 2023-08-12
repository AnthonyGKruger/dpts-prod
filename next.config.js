/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ezdev-cms-8d2cb1c574f0.herokuapp.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
