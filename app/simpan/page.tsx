"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Calendar,
  Briefcase,
  CheckCircle2,
  Coins,
  FileText,
  Users,
  Hash,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import FormKaryawan from "@/components/types/types.karyawan";

export default function KaryawanPage() {
  const [formData, setFormData] = useState<FormKaryawan>({
    nama: "",
    email: "",
    umur: "",
    tanggalLahir: "",
    jenisKelamin: "",
    departemen: "",
    statusAktif: true,
    keahlian: [],
    ekspektasiGaji: 5000000,
    alamat: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormKaryawan, string>>
  >({});

  const keahlianOptions = [
    { id: "react", label: "React / Next.js" },
    { id: "node", label: "Node.js" },
    { id: "design", label: "UI/UX Design" },
    { id: "devops", label: "DevOps" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormKaryawan]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setFormData((prev) => {
      const updatedKeahlian = checked
        ? [...prev.keahlian, id]
        : prev.keahlian.filter((k) => k !== id);
      return { ...prev, keahlian: updatedKeahlian };
    });
    if (errors.keahlian) {
      setErrors((prev) => ({ ...prev, keahlian: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Record<keyof FormKaryawan, string>> = {};
    if (!formData.nama) newErrors.nama = "Nama lengkap wajib diisi";
    if (!formData.email.includes("@")) newErrors.email = "Email tidak valid";
    if (!formData.umur || Number(formData.umur) < 17)
      newErrors.umur = "Umur minimal 17 tahun";
    if (!formData.tanggalLahir)
      newErrors.tanggalLahir = "Tanggal lahir wajib diisi";
    if (!formData.jenisKelamin) newErrors.jenisKelamin = "Pilih jenis kelamin";
    if (!formData.departemen) newErrors.departemen = "Pilih departemen";
    if (formData.keahlian.length === 0)
      newErrors.keahlian = "Pilih minimal satu keahlian";
    if (!formData.alamat) newErrors.alamat = "Alamat lengkap wajib diisi";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Data Karyawan Berhasil Disubmit:", formData);
    alert("Data karyawan berhasil disimpan!");
  };

  return (
    <main className="grid min-h-screen bg-[#06080f] text-white lg:grid-cols-[1fr_0.9fr]">
      {/* SEKSI FORM INPUT */}
      <section className="flex items-center px-6 py-16">
        <div className="mx-auto w-full max-w-2xl">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/25 md:p-8">
            <div className="mb-8">
              <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
                <Briefcase className="size-5" />
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight">
                Tambah Karyawan Baru
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 1. INPUT TEXT (Nama) */}
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/72">
                  Nama Lengkap
                </span>
                <div className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-[#0b101b] px-4 focus-within:border-[#d4af37]/60">
                  <User className="size-4 text-white/35" />
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-white/25 text-white"
                  />
                </div>
                {errors.nama && (
                  <p className="text-xs text-red-400 mt-1">{errors.nama}</p>
                )}
              </label>

              {/* 2. INPUT EMAIL */}
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/72">
                  Email Perusahaan
                </span>
                <div className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-[#0b101b] px-4 focus-within:border-[#d4af37]/60">
                  <Mail className="size-4 text-white/35" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@company.com"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-white/25 text-white"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 3. INPUT NUMBER (Umur) */}
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-white/72">
                    Umur
                  </span>
                  <div className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-[#0b101b] px-4 focus-within:border-[#d4af37]/60">
                    <Hash className="size-4 text-white/35" />
                    <input
                      type="number"
                      name="umur"
                      value={formData.umur}
                      onChange={handleChange}
                      placeholder="Contoh: 25"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-white/25 text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                  {errors.umur && (
                    <p className="text-xs text-red-400 mt-1">{errors.umur}</p>
                  )}
                </label>

                {/* 4. INPUT DATE (Tanggal Lahir) */}
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-white/72">
                    Tanggal Lahir
                  </span>
                  <div className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-[#0b101b] px-4 focus-within:border-[#d4af37]/60">
                    <Calendar className="size-4 text-white/35" />
                    <input
                      type="date"
                      name="tanggalLahir"
                      value={formData.tanggalLahir}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm outline-none text-white transition placeholder:text-white/25 [color-scheme:dark]"
                    />
                  </div>
                  {errors.tanggalLahir && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.tanggalLahir}
                    </p>
                  )}
                </label>
              </div>

              {/* 5. RADIO GROUP (Jenis Kelamin) */}
              <div>
                <span className="mb-2 block text-sm font-bold text-white/72">
                  Jenis Kelamin
                </span>
                <div className="flex gap-6 rounded-lg border border-white/10 bg-[#0b101b] p-3 px-4 h-12 items-center">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-white/58 hover:text-white">
                    <input
                      type="radio"
                      name="jenisKelamin"
                      value="pria"
                      checked={formData.jenisKelamin === "pria"}
                      onChange={handleChange}
                      className="size-4 accent-[#d4af37]"
                    />
                    <span>Pria</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-white/58 hover:text-white">
                    <input
                      type="radio"
                      name="jenisKelamin"
                      value="wanita"
                      checked={formData.jenisKelamin === "wanita"}
                      onChange={handleChange}
                      className="size-4 accent-[#d4af37]"
                    />
                    <span>Wanita</span>
                  </label>
                </div>
                {errors.jenisKelamin && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.jenisKelamin}
                  </p>
                )}
              </div>

              {/* 6. SELECT DROPDOWN (Departemen) */}
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/72">
                  Departemen
                </span>
                <div className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-[#0b101b] px-4 focus-within:border-[#d4af37]/60">
                  <Users className="size-4 text-white/35" />
                  <select
                    name="departemen"
                    value={formData.departemen}
                    onChange={handleChange}
                    className="w-full bg-transparent text-sm outline-none text-white/72 focus:text-white [color-scheme:dark]"
                  >
                    <option value="" disabled className="bg-[#0b101b]">
                      Pilih departemen penempatan
                    </option>
                    <option value="it" className="bg-[#0b101b]">
                      Information Technology
                    </option>
                    <option value="hr" className="bg-[#0b101b]">
                      Human Resources
                    </option>
                    <option value="finance" className="bg-[#0b101b]">
                      Finance & Accounting
                    </option>
                    <option value="marketing" className="bg-[#0b101b]">
                      Marketing
                    </option>
                  </select>
                </div>
                {errors.departemen && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.departemen}
                  </p>
                )}
              </label>

              {/* 7. TOGGLE / SWITCH (Status Aktif) */}
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0b101b] p-4 shadow-sm">
                <div>
                  <span className="block text-sm font-bold text-white/72">
                    Status Karyawan Aktif
                  </span>
                  <span className="text-xs text-white/45">
                    Karyawan langsung didaftarkan ke sistem kerja internal
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      statusAktif: !prev.statusAktif,
                    }))
                  }
                  className={`${
                    formData.statusAktif ? "bg-[#d4af37]" : "bg-white/10"
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none`}
                >
                  <span
                    className={`${
                      formData.statusAktif
                        ? "translate-x-6 bg-slate-950"
                        : "translate-x-1 bg-white"
                    } inline-block h-4 w-4 transform rounded-full transition-transform duration-200`}
                  />
                </button>
              </div>

              {/* 8. CHECKBOX MULTIPLE (Keahlian) */}
              <div>
                <span className="mb-2 block text-sm font-bold text-white/72">
                  Keahlian Core Utama
                </span>
                <div className="grid grid-cols-2 gap-3 rounded-lg border border-white/10 bg-[#0b101b] p-4">
                  {keahlianOptions.map((option) => (
                    <label
                      key={option.id}
                      className="flex items-center gap-2.5 text-sm text-white/58 hover:text-white cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={formData.keahlian.includes(option.id)}
                        onChange={(e) =>
                          handleCheckboxChange(option.id, e.target.checked)
                        }
                        className="size-4 rounded accent-[#d4af37]"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors.keahlian && (
                  <p className="text-xs text-red-400 mt-1">{errors.keahlian}</p>
                )}
              </div>

              {/* 9. SLIDER RANGE (Ekspektasi Gaji) */}
              <div className="rounded-lg border border-white/10 bg-[#0b101b] p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white/72">
                    Ekspektasi Gaji Bulanan
                  </span>
                  <span className="text-sm font-bold text-[#d4af37] flex items-center gap-1">
                    <Coins className="size-4" /> Rp{" "}
                    {Number(formData.ekspektasiGaji).toLocaleString("id-ID")}
                  </span>
                </div>
                <input
                  type="range"
                  name="ekspektasiGaji"
                  min="3000000"
                  max="30000000"
                  step="500000"
                  value={formData.ekspektasiGaji}
                  onChange={handleChange}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                />
                <div className="flex justify-between text-[10px] text-white/35 mt-1">
                  <span>Rp 3.000.000</span>
                  <span>Rp 30.000.000</span>
                </div>
              </div>

              {/* 10. TEXTAREA (Alamat) */}
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/72">
                  Alamat Domisili Lengkap
                </span>
                <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#0b101b] p-4 focus-within:border-[#d4af37]/60">
                  <FileText className="size-4 text-white/35 mt-0.5" />
                  <textarea
                    name="alamat"
                    rows={3}
                    value={formData.alamat}
                    onChange={handleChange}
                    placeholder="Masukkan alamat rumah saat ini secara detail..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-white/25 text-white resize-none leading-relaxed"
                  />
                </div>
                {errors.alamat && (
                  <p className="text-xs text-red-400 mt-1">{errors.alamat}</p>
                )}
              </label>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#d4af37] px-6 font-bold text-slate-950 transition hover:bg-white"
              >
                Simpan Data Karyawan
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
