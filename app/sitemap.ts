import type { MetadataRoute } from "next";
import prisma from "@/lib/prisma";
import { absoluteUrl, publicRoutes } from "@/lib/site";

/**
 * Sitemap dinamis untuk https://<domain>/sitemap.xml
 *
 * Berisi semua halaman publik + halaman detail artikel
 * (/tutorial/artikel/[slug]) yang datanya diambil dari `@/lib/prisma`.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const halamanStatis: MetadataRoute.Sitemap = publicRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const halamanArtikel = await getArtikelEntries();

  return [...halamanStatis, ...halamanArtikel];
}

async function getArtikelEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const daftarArtikel = await prisma.artikel.findMany();

    return daftarArtikel
      .filter((artikel) => Boolean(artikel.slug))
      .map((artikel) => ({
        url: absoluteUrl(`/tutorial/artikel/${artikel.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
  } catch {
    // Jika sumber data gagal dibaca, sitemap tetap dihasilkan dari halaman statis.
    return [];
  }
}
