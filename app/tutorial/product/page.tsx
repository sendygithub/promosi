import React from "react";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function TambahProductpage() {
  async function tambahProduct(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const price = (formData.get("price") as string, 10);
    const category = formData.get("category") as string;

    await prisma.product.create({
      data: { name, price, category },
    });

    redirect("/tutorial/product");
  }

  const items = await prisma.product.findMany();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full border border-white/[0.06] bg-[#141619] flex flex-col md:flex-row">
        {/* FORM PRODUCT */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Tambah Product Baru
          </h2>
          <form action={tambahProduct} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#A8B0BC]">
                Product Name
              </label>
              <input
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-white/[0.12] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
                placeholder="contoh: baju"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#A8B0BC]">
                Harga
              </label>
              <input
                name="price"
                type="number"
                required
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-white/[0.12] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
                placeholder="contoh: 100000"
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
                <option value="baju" className="bg-[#141619]">
                  Baju
                </option>
                <option value="celana" className="bg-[#141619]">
                  Celana
                </option>
                <option value="sepatu" className="bg-[#141619]">
                  Sepatu
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-5 w-full bg-[#1C69D4] text-white py-2 px-4 hover:bg-[#1C69D4]/90 transition duration-200 font-semibold"
            >
              Simpan
            </button>
          </form>
        </div>

        {/* TABLE */}
        <div className="text-[#A8B0BC] w-full md:w-1/2 p-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
                  No
                </th>
                <th className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
                  Price
                </th>
                <th className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
                  Category
                </th>
              </tr>
            </thead>

            <tbody>
              {items.length > 0 ? (
                items.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-white/[0.06] hover:bg-white/[0.03] transition-colors"
                  >
                    <td className="px-4 py-3 text-[13px]">{item.id}</td>
                    <td className="px-4 py-3 text-[13px] text-white">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 text-[13px]">{item.price}</td>
                    <td className="px-4 py-3 text-[13px]">{item.category}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-[13px] text-[#A8B0BC]/50"
                  >
                    Data masih kosong
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
