"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CodeViewerKalkulatorBelanja from "./codeviewerkalkulatorbelanja";

export default function KalkulatorBelanja() {
  const [daftarHarga, setDaftarHarga] = useState<number[]>([]);
  const [inputBaru, setInputBaru] = useState<string>("");

  const hitungTotal = () => {
    let total = 0;
    daftarHarga.forEach((harga) => {
      total += harga;
    });
    return total;
  };

  const tambahHarga = () => {
    const nilai = parseFloat(inputBaru);
    if (!isNaN(nilai)) {
      setDaftarHarga([...daftarHarga, nilai]);
      setInputBaru("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full border border-white/[0.06] bg-[#141619] flex flex-col md:flex-row">
        {/* BAGIAN KANAN: Form Input */}
        <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full md:w-1/2">
          <Card className="border border-white/[0.06] bg-[#141619] w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white text-center">
                Kalkulator Belanja Sederhana
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <Input
                className="w-full bg-transparent border border-white/[0.12] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors text-center"
                type="number"
                placeholder="masukan angka"
                value={inputBaru}
                onChange={(e) => setInputBaru(e.target.value)}
              />
              <Button
                onClick={tambahHarga}
                className="w-full bg-[#1C69D4] hover:bg-[#1C69D4]/90 text-white font-semibold py-2 transition-colors"
              >
                {" "}
                Tambah
              </Button>

              {/* Daftar Harga */}
              <div className="space-y-2">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4]">
                  Daftar Item:
                </h3>
                <ul className="space-y-1">
                  {daftarHarga.map((harga, index) => (
                    <li
                      key={index}
                      className="py-1 flex justify-between border-b border-white/[0.06] text-[13px]"
                    >
                      <span className="text-[#A8B0BC]">Barang {index + 1}</span>
                      <span className="font-mono text-white">
                        Rp {harga.toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hasil Akhir */}
              <div className="pt-4 border-t border-white/[0.06] flex justify-between items-center">
                <span className="text-[#A8B0BC] font-medium">Total Akhir:</span>
                <span className="text-2xl font-bold text-[#1C69D4]">
                  Rp {hitungTotal().toLocaleString()}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center p-4">
          <CodeViewerKalkulatorBelanja />
        </div>
      </div>
    </div>
  );
}
