"use client";
import { useState } from "react";

export default function KalkulatorPage() {
  const [totalBelanja, setTotalBelanja] = useState("");

  const total = Number(totalBelanja) || 0;
  const diskon = total > 100000 ? total * 0.15 : 0;
  const TotalBayar = total - diskon;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border border-white/[0.06] bg-[#141619] p-6 space-y-6">
        <h1 className="text-xl font-semibold text-white text-center">
          Kalkulator
        </h1>

        <div>
          <label className="block text-sm font-medium text-[#A8B0BC] mb-1">
            Total Belanja
          </label>
          <input
            type="number"
            inputMode="numeric"
            placeholder="masukan total belanja"
            value={totalBelanja}
            onChange={(e) => setTotalBelanja(e.target.value)}
            className="w-full bg-transparent border border-white/[0.12] px-4 py-2 text-[14px] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
          />
        </div>

        <div className="bg-white/[0.03] border border-white/[0.06] p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#A8B0BC]">Diskon</span>
            <span className="font-medium text-[#1C69D4]">
              -Rp {diskon.toLocaleString("id-ID")}
            </span>
          </div>
        </div>

        <div className="flex justify-between text-base font-semibold">
          <span className="text-white">Total Bayar</span>
          <span className="text-[#1C69D4]">
            Rp {TotalBayar.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </div>
  );
}
