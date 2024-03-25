/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
      },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
    },
}

module.exports = nextConfig
