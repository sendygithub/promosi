import prisma from "@/lib/prisma";
import React from "react";
import { redirect } from "next/navigation";
import ArticleCard from "./ArticleCard";

export default async function Artikelpage() {
  async function TambahArtikel(formData: FormData) {
    "use server";
    const judul = formData.get("judul") as string;
    const slug = formData.get("slug") as string;
    const category = formData.get("category") as string;
    const isi = formData.get("isi") as string;

    await prisma.artikel.create({
      data: {
        judul,
        category,
        isi,
        slug,
      },
    });
    redirect("/tutorial/artikel");
  }

  const isitabel = await prisma.artikel.findMany();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full border border-white/[0.06] bg-[#141619] flex flex-col md:flex-row">
        {/* FORM INPUT */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Tambah Artikel Baru
          </h2>
          <form className="space-y-4" action={TambahArtikel}>
            <div>
              <label className="block text-sm font-medium text-[#A8B0BC]">
                Judul Artikel
              </label>
              <input
                name="judul"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-white/[0.12] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
                placeholder="contoh: malin kundang"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#A8B0BC]">
                Slug Artikel
              </label>
              <input
                name="slug"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-white/[0.12] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
                placeholder="contoh: slug-001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#A8B0BC]">
                Kategory
              </label>
              <select
                name="category"
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-white/[0.12] text-white focus:outline-none focus:border-white/[0.25] transition-colors"
              >
                <option value="cerpen" className="bg-[#141619]">
                  Cerpen
                </option>
                <option value="fiksi" className="bg-[#141619]">
                  Fiksi
                </option>
                <option value="story" className="bg-[#141619]">
                  Story
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#A8B0BC]">
                Isi
              </label>
              <input
                name="isi"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-white/[0.12] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
                placeholder="isi artikel"
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full bg-[#1C69D4] text-white py-2 px-4 hover:bg-[#1C69D4]/90 transition duration-200 font-semibold"
            >
              Post
            </button>
          </form>
        </div>

        {/* CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full md:w-1/2">
          {isitabel.length > 0 ? (
            isitabel.map((item) => <ArticleCard key={item.id} artikel={item} />)
          ) : (
            <p className="text-[#A8B0BC]/50 text-[13px] col-span-2 text-center py-8">
              Data masih kosong
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
