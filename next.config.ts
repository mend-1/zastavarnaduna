import type { NextConfig } from "next";
// Static export for Cloudflare Pages; no Next.js server is required at runtime.
const config: NextConfig = {
  output: "export",
  poweredByHeader: false,
};
export default config;
