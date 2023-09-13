/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['nextjs.org','images.prismic.io','rickandmortyapi.com']
  },
  env:{
    API_KEY:'1'
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
