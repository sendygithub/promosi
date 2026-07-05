"use client";

import React, { useState } from "react";
import CodeViewerDekomposisi from "./codeviewerdekomposisi";

export function Dekomposisi() {
  const [inputNilai, setInputNilai] = useState<string>("");
  const [daftarNilai, setDaftarNilai] = useState<number[]>([]);

  const hitungTotal = (data: number[]) => {
    return data.reduce((acc, curr) => acc + curr, 0);
  };

  const hitungJumlahData = (data: number[]) => {
    return data.length;
  };

  const hitungRataRata = () => {
    const total = hitungTotal(daftarNilai);
    const jumlah = hitungJumlahData(daftarNilai);

    if (jumlah === 0) return 0;
    return total / jumlah;
  };

  const tambahNilai = () => {
    const nilai = parseFloat(inputNilai);
    if (!isNaN(nilai)) {
      setDaftarNilai([...daftarNilai, nilai]);
      setInputNilai("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full border border-white/[0.06] bg-[#141619] flex flex-col md:flex-row">
        {/* BAGIAN KANAN: Form Input */}
        <div className="p-8 w-full md:w-1/2">
          <div className="border border-white/[0.06] bg-[#141619] p-8 w-full max-w-md">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>📊</span> Kalkulator Nilai Siswa
            </h2>

            {/* Input */}
            <div className="flex gap-2 mb-6">
              <input
                type="number"
                className="flex-1 bg-transparent border border-white/[0.12] px-3 py-2 text-[14px] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
                placeholder="Masukkan nilai (0-100)"
                value={inputNilai}
                onChange={(e) => setInputNilai(e.target.value)}
              />
              <button
                onClick={tambahNilai}
                className="bg-[#1C69D4] hover:bg-[#1C69D4]/90 text-white px-4 py-2 font-bold transition-all"
              >
                Tambah
              </button>
            </div>

            {/* List Nilai */}
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50 mb-2">
                Daftar Nilai Masuk
              </p>
              <div className="flex flex-wrap gap-2 min-h-[40px]">
                {daftarNilai.map((n, i) => (
                  <span
                    key={i}
                    className="bg-white/[0.03] text-[#A8B0BC] px-3 py-1 text-sm border border-white/[0.06]"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {/* Hasil Perhitungan (Hasil Dekomposisi) */}
            <div className="space-y-3 pt-6 border-t border-white/[0.06]">
              <div className="flex justify-between text-sm">
                <span className="text-[#A8B0BC]">Total Nilai:</span>
                <span className="font-bold text-white">
                  {hitungTotal(daftarNilai)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#A8B0BC]">Jumlah Data:</span>
                <span className="font-bold text-white">
                  {hitungJumlahData(daftarNilai)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold text-white">Rata-Rata:</span>
                <span className="text-3xl font-black text-[#1C69D4]">
                  {hitungRataRata().toFixed(1)}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[#A8B0BC]/50 text-[11px] text-center max-w-xs leading-relaxed mx-auto">
            <strong>Konsep Dekomposisi:</strong> Masalah "Rata-Rata" dipecah
            menjadi tugas <em>Sum</em>, <em>Count</em>, dan <em>Divide</em>.
          </p>
        </div>

        {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center p-4">
          <CodeViewerDekomposisi />
        </div>
      </div>
    </div>
  );
}

export default Dekomposisi;
