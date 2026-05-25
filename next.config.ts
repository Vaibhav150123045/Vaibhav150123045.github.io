import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',       // Essential for GitHub Pages
  images: {
    unoptimized: true,    // GitHub Pages doesn't support the default Next.js Image Optimization API
  },
  // If your repo is NOT 'yourusername.github.io' (e.g., it's 'portfolio-site'), 
  // you must add:
  // basePath: '/portfolio-site',
};

export default nextConfig;