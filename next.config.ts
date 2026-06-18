import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {hostname:"lh3.googleusercontent.com"},
      {
        hostname:"res.cloudinary.com"
      },
      {
        hostname:"picsum.photos"
      }
    ]
  }
};

export default nextConfig;
