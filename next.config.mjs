/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev-drupal-nextjs-integration.pantheonsite.io',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'images-na.ssl-images-amazon.com',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
