import type { MetadataRoute } from "next";
import { absoluteUrl, disallowPaths, siteHost } from "@/lib/site";

/**
 * Menghasilkan https://<domain>/robots.txt
 * Memberi tahu crawler Google halaman mana yang boleh diindeks
 * dan di mana sitemap berada.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowPaths,
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteHost,
  };
}
