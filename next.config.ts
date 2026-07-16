import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root: an unrelated package-lock.json sits a few
  // directories up from this project, which otherwise makes Next.js guess.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
