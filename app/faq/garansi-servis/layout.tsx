import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Apakah Ada Garansi untuk Servis?",
  description:
    "Garansi jasa dan spare part sesuai jenis perbaikan. Kami memberikan garansi penuh atas setiap pekerjaan servis maupun penggantian komponen.",
  path: "/faq/garansi-servis",
});

export default function FaqGaransiServisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
