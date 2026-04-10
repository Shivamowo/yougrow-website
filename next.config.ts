import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://lh3.googleusercontent.com/**"),
    ],
    qualities: [75, 90],
  },
};

export default nextConfig;
