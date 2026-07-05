"use client";

import { Trash, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ArticleCard({ artikel }: { artikel: any }) {
  const router = useRouter();

  const handlehapus = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (confirm(`yakin hapus ${artikel.judul}?`)) {
      const res = await fetch(`/api/artikel/${artikel.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("berhasil di hapus!");
        router.refresh();
      } else {
        alert("gagal hapus data");
      }
    }
  };

  return (
    <div className="group border border-white/[0.06] bg-[#141619] hover:border-white/[0.12] transition-all duration-500">
      <Link href={`/tutorial/artikel/${artikel.slug}`}>
        <div className="p-5 relative" key={artikel.id}>
          <button
            onClick={handlehapus}
            className="absolute top-2 right-2 p-1 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition z-10"
          >
            <Trash size={16} />
          </button>
          <h2 className="font-semibold text-[15px] text-white mb-2">
            {artikel.judul}
          </h2>
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4]">
            {artikel.category}
          </span>
          <p className="text-[13px] text-[#A8B0BC] mt-2 leading-relaxed">
            {artikel.slug}
          </p>
          <p className="text-[12px] text-[#A8B0BC]/70 mt-1 leading-relaxed line-clamp-2">
            {artikel.isi}
          </p>
        </div>

        <div className="px-5 pb-5">
          <Button className="w-full bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 text-[13px] font-medium">
            <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default ArticleCard;
