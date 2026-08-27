/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'commons.wikimedia.org',

      },
    ],
  },
};

export default nextConfig;
