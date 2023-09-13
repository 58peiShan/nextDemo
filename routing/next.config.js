/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['nextjs.org','rickandmortyapi.com','images.unsplash.com']
    },
    skipMiddlewareUrlNormalize: true,
    
}

module.exports = nextConfig
