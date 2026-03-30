import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN' // Prevents Clickjacking by disallowing embedding in iframes
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff' // Disables strict MIME type sniffing attacks
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' // Locks down unauthorized browser API access
  }
];

const nextConfig: NextConfig = {
  reactStrictMode: true, // Prevents unintended side-effects and crashes
  poweredByHeader: false, // Prevents hackers from seeing "X-Powered-By: Next.js"
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes globally
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
