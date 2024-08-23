/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'statsme.vercel.app',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
