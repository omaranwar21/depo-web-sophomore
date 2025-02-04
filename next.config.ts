import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.depowebeg.com",
        port: "",
        pathname: "/education/assets/meta/**",
        search: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
