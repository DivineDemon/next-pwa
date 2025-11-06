/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.ts";
import withPWA from "@ducanh2912/next-pwa";

/** @type {import("next").NextConfig} */
const config: import("next").NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "picsum.photos",
      },
    ],
  },
};

// Only apply PWA plugin in production to avoid Webpack/Turbopack conflicts in dev
const isDev = process.env.NODE_ENV === "development";

const nextConfig = isDev
  ? config
  : withPWA({
      dest: "public",
      cacheOnFrontEndNav: true,
      aggressiveFrontEndNavCaching: true,
      reloadOnOnline: true,
      workboxOptions: {
        disableDevLogs: true,
      },
    })(config);

export default nextConfig;
