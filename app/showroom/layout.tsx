import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Project Showroom & Portfolio Aplikasi",
  description:
    "Eksplorasi aplikasi sistem informasi, website, dan e-commerce yang kami bangun dengan Next.js, Laravel, React, TypeScript, Prisma, dan Supabase.",
  path: "/showroom",
});

export default function ShowroomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
