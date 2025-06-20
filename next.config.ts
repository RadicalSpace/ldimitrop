import type { NextConfig } from "next";
 
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
  // Optionally, add any other Next.js config below
  output: 'export',
  basePath: '/ldimitrop',
  assetPrefix: '/ldimitrop/',
}

export default nextConfig