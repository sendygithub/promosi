/**
 * Konfigurasi terpusat untuk SEO: URL kanonik situs, metadata global,
 * dan daftar halaman publik yang dipakai oleh `app/sitemap.ts` & `app/robots.ts`.
 *
 * Urutan penentuan URL:
 * 1. NEXT_PUBLIC_SITE_URL (domain custom / override manual)
 * 2. VERCEL_PROJECT_PRODUCTION_URL (otomatis diisi Vercel, berisi domain produksi)
 * 3. VERCEL_URL (deployment preview)
 * 4. fallback domain produksi saat build, atau http://localhost:3000 saat dev
 */

import type { Metadata } from "next";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SiteRoute = {
  /** Path relatif terhadap root, contoh: "/servis" */
  path: string;
  changeFrequency: ChangeFrequency;
  /** Prioritas 0.0 - 1.0 sesuai konvensi sitemap.org */
  priority: number;
};

const FALLBACK_SITE_URL = "https://prisma-komputer.vercel.app";

function stripTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return stripTrailingSlash(configured);

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) return `https://${stripTrailingSlash(vercelProduction)}`;

  const vercelPreview = process.env.VERCEL_URL?.trim();
  if (vercelPreview) return `https://${stripTrailingSlash(vercelPreview)}`;

  return process.env.NODE_ENV === "production"
    ? FALLBACK_SITE_URL
    : "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

/** Host tanpa protokol, dipakai untuk direktif `Host` di robots.txt */
export const siteHost = new URL(siteUrl).host;

export const siteConfig = {
  name: "Kia Komputer",
  title: "Kia Komputer — Servis Komputer, Rakit PC & Partner Skripsi IT",
  description:
    "Kia Komputer membantu Anda menyelesaikan masalah IT: servis & rakit komputer, upgrade SSD/RAM, instalasi Windows dan Office, ganti keyboard atau LCD laptop, sampai pendampingan pengembangan aplikasi skripsi.",
  shortDescription: "Membantu anda menyelesaikan masalah IT",
  keywords: [
    "servis komputer",
    "servis laptop",
    "service laptop panggilan",
    "rakit pc",
    "upgrade ssd laptop",
    "instal windows 11",
    "ganti keyboard laptop",
    "perbaikan laptop bluescreen",
    "jasa skripsi informatika",
    "jasa pembuatan aplikasi skripsi",
    "kia komputer",
  ],
  locale: "id_ID",
  language: "id",
  ogImage: "/servis/servis 3.jpeg",
  /** Nomor kontak yang tampil di halaman /servis */
  telephone: "+6281233445566",
  telephoneDisplay: "0812-3344-5566",
  whatsapp: "https://wa.me/6281233445566",
  areaServed: "Tangerang",
  services: [
    "Servis Komputer & Laptop",
    "Rakit PC & Upgrade Hardware",
    "Instalasi Windows, Office & Software",
    "Pendampingan Skripsi & Pengembangan Aplikasi",
  ],
} as const;

/**
 * Structured data (JSON-LD) tipe LocalBusiness supaya Google bisa
 * mengaitkan nama, layanan, dan kontak dengan halaman ini.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    telephone: siteConfig.telephone,
    image: absoluteUrl(siteConfig.ogImage),
    areaServed: {
      "@type": "City",
      name: siteConfig.areaServed,
    },
    knowsAbout: [...siteConfig.services],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Layanan ${siteConfig.name}`,
      itemListElement: siteConfig.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.telephone,
      url: siteConfig.whatsapp,
      availableLanguage: ["id"],
    },
  };
}

/**
 * Helper metadata untuk halaman yang halaman-nya berupa Client Component
 * (sehingga tidak bisa mengekspor `metadata` sendiri). Dipakai dari file
 * `layout.tsx` di dalam route yang bersangkutan.
 */
export function pageMetadata(options: {
  title: string;
  description: string;
  /** Path halaman, dipakai untuk canonical & og:url. Contoh: "/servis" */
  path: string;
  /** Opsional, ganti gambar OG untuk halaman tertentu */
  ogImage?: string;
  /** Set `false` untuk halaman yang tidak boleh diindeks */
  index?: boolean;
}): Metadata {
  const { title, description, path } = options;
  const fullTitle = `${title} | ${siteConfig.name}`;
  const image = absoluteUrl(options.ogImage ?? siteConfig.ogImage);
  const index = options.index ?? true;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export function absoluteUrl(path = "/") {
  const url = /^https?:\/\//i.test(path)
    ? path
    : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

  // encodeURI membuat URL aman dipakai di sitemap & metadata
  // (contoh: nama file gambar dengan spasi -> %20).
  return encodeURI(url);
}

/**
 * Halaman yang sengaja tidak diindeks mesin pencari.
 * - /ulangtahun : undangan ulang tahun personal dengan nama tamu dinamis
 * - /kiara      : undangan ulang tahun personal
 */
export const disallowPaths = ["/ulangtahun", "/kiara"];

/** Semua halaman publik yang layak diindeks Google (dipakai untuk sitemap). */
export const publicRoutes: SiteRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/servis", changeFrequency: "weekly", priority: 0.9 },
  { path: "/harga", changeFrequency: "weekly", priority: 0.9 },
  { path: "/showroom", changeFrequency: "weekly", priority: 0.8 },
  { path: "/servis/gallery", changeFrequency: "monthly", priority: 0.6 },
  { path: "/tutorial", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tutorial/artikel", changeFrequency: "weekly", priority: 0.6 },
  { path: "/tutorial/caridata", changeFrequency: "monthly", priority: 0.5 },
  { path: "/tutorial/filtering", changeFrequency: "monthly", priority: 0.5 },
  { path: "/tutorial/transformation", changeFrequency: "monthly", priority: 0.5 },
  { path: "/tutorial/dekomposisi", changeFrequency: "monthly", priority: 0.5 },
  { path: "/tutorial/ifelse", changeFrequency: "monthly", priority: 0.5 },
  { path: "/tutorial/inputvalidation", changeFrequency: "monthly", priority: 0.5 },
  { path: "/tutorial/kalkulator", changeFrequency: "monthly", priority: 0.5 },
  { path: "/tutorial/kalkulatorbelanja", changeFrequency: "monthly", priority: 0.5 },
  { path: "/tutorial/usestate", changeFrequency: "monthly", priority: 0.5 },
  { path: "/tutorial/zustand", changeFrequency: "monthly", priority: 0.5 },
  { path: "/tutorial/shop", changeFrequency: "monthly", priority: 0.4 },
  { path: "/tutorial/checkout", changeFrequency: "monthly", priority: 0.4 },
  { path: "/tutorial/product", changeFrequency: "monthly", priority: 0.4 },
  { path: "/tutorial/movies", changeFrequency: "monthly", priority: 0.4 },
  { path: "/tutorial/contactpage", changeFrequency: "monthly", priority: 0.4 },
  { path: "/faq/antar-jemput", changeFrequency: "monthly", priority: 0.5 },
  { path: "/faq/garansi-servis", changeFrequency: "monthly", priority: 0.5 },
  { path: "/faq/keamanan-data", changeFrequency: "monthly", priority: 0.5 },
  { path: "/faq/waktu-pengerjaan", changeFrequency: "monthly", priority: 0.5 },
];
