import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Berapa Lama Waktu Pengerjaan Servis?",
  description:
    "Estimasi waktu pengerjaan servis tergantung jenis kerusakan dan ketersediaan spare part. Kami menyelesaikan servis secepat mungkin tanpa mengorbankan kualitas.",
  path: "/faq/waktu-pengerjaan",
});

export default function FaqWaktuPengerjaanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
