import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['*', 'http://192.168.1.131:3000/'],
};

export default nextConfig;
