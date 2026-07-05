"use client";

import React, { useState } from "react";
import CodeViewerInputValidation from "./codeviewerinputvalidation";

export function InputValidation() {
  const [password, setPassword] = useState<string>("");

  const isPanjangCukup = password.length >= 8;
  const isKosong = password.length === 0;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full border border-white/[0.06] bg-[#141619] flex flex-col md:flex-row">
        {/* BAGIAN KANAN: Form Input */}
        <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full md:w-1/2">
          <div className="border border-white/[0.06] bg-[#141619] p-8 w-full max-w-sm">
            <h2 className="text-2xl font-bold text-white mb-2">
              Buat Password
            </h2>
            <p className="text-[13px] text-[#A8B0BC] mb-6">
              Silakan masukkan password baru Anda.
            </p>

            <div className="space-y-2">
              <label className="text-[13px] font-medium text-[#A8B0BC]">
                Password
              </label>
              <input
                type="password"
                className={`w-full bg-transparent border px-3 py-2 text-[14px] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none transition-colors ${
                  isKosong
                    ? "border-white/[0.12] focus:border-white/[0.25]"
                    : isPanjangCukup
                      ? "border-green-500/50 focus:border-green-500"
                      : "border-red-500/50 focus:border-red-500"
                }`}
                placeholder="Minimal 8 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-4 flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center ${
                  isPanjangCukup ? "bg-green-500" : "bg-white/[0.06]"
                }`}
              >
                {isPanjangCukup && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <p
                className={`text-[13px] font-medium ${
                  isKosong
                    ? "text-[#A8B0BC]/50"
                    : isPanjangCukup
                      ? "text-green-400"
                      : "text-red-400"
                }`}
              >
                {isPanjangCukup ? "Password sudah kuat" : "Minimal 8 karakter"}
              </p>
            </div>

            <button
              disabled={!isPanjangCukup}
              className={`w-full mt-8 py-3 font-semibold text-[14px] transition-all ${
                isPanjangCukup
                  ? "bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90"
                  : "bg-white/[0.06] text-[#A8B0BC]/30 cursor-not-allowed"
              }`}
            >
              Daftar Sekarang
            </button>
          </div>

          <p className="mt-6 text-[#A8B0BC]/50 text-[11px] text-center font-mono">
            Alur: password.length ({password.length}){" "}
            {isPanjangCukup ? "≥" : "<"} 8
          </p>
        </div>

        {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
          <CodeViewerInputValidation />
        </div>
      </div>
    </div>
  );
}

export default InputValidation;
