This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# promosi


## SEO & Deploy

### Yang sudah disiapkan

| File | Fungsi |
| --- | --- |
| `lib/site.ts` | Sumber tunggal untuk URL situs, metadata global, daftar halaman publik, JSON-LD, dan helper `pageMetadata()` |
| `app/sitemap.ts` | Menghasilkan `/sitemap.xml` (halaman publik + semua artikel dari `lib/prisma.ts`) |
| `app/robots.ts` | Menghasilkan `/robots.txt` (allow `/`, disallow halaman personal, menunjuk ke sitemap) |
| `app/layout.tsx` | Title, description, keywords, canonical, Open Graph, Twitter Card, JSON-LD `LocalBusiness`, Google Verification |
| `app/**/layout.tsx` | Metadata unik per halaman (title, description, canonical) untuk halaman yang berupa Client Component |

Halaman personal `/ulangtahun/[guest]` dan `/kiara` tidak diindeks (`noindex`) dan tidak dimasukkan ke sitemap.

### Environment variable

Domain untuk canonical/OG/sitemap ditentukan otomatis:

1. `NEXT_PUBLIC_SITE_URL` (isi manual, mis. `https://kia-komputer.com`)
2. `VERCEL_PROJECT_PRODUCTION_URL` (otomatis di Vercel, domain produksi)
3. `VERCEL_URL` (deployment preview)
4. Fallback: `https://kia-komputer.vercel.app`, atau `http://localhost:3000` saat dev

Set `NEXT_PUBLIC_SITE_URL` di Vercel (Settings → Environment Variables) jika memakai domain custom, lalu redeploy.

### Checklist setelah deploy

1. Buka `https://<domain>/sitemap.xml` dan `https://<domain>/robots.txt` — pastikan keduanya tampil.
2. Buka [Google Search Console](https://search.google.com/search-console), tambahkan property domain.
3. Menu **Sitemaps** → submit `sitemap.xml`.
4. Menu **URL Inspection** → `Request indexing` untuk halaman penting (`/`, `/servis`, `/harga`, `/showroom`).
5. Validasi structured data di [Rich Results Test](https://search.google.com/test/rich-results).

### Deploy

- Vercel akan build otomatis setiap push ke branch produksi (`main`).
- Build manual dari lokal: `vercel --prod`.
