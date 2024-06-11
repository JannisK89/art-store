/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c.tenor.com',
        pathname: '/TMrEyOZ2PwIAAAAC/**',
        port: '',
      },
    ],
  },
}

export default nextConfig
