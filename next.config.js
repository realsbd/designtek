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
    env: {
        API_URL: 'https://fintech-blog-749ab6e21c45.herokuapp.com',
        AUTH_SECRET: '8sXVq+nlQHZy4mxNJDGgoP9O3afm0p6QAlSDZb3K1H0='
    }
}

module.exports = nextConfig
