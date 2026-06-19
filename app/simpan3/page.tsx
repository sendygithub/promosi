"use client";

import { useState } from "react";

export default function EmployeeFormPage() {
  const [formData, setFormData] = useState<{
    nama: string;
    tanggalLahir: string;
    umur: number;
    jenisKelamin: string;
    statusAktif: boolean;
    departemen: string;
    email: string;
    alamat: string;
    skill: string[];
    gaji: number;
  }>({
    nama: "",
    tanggalLahir: "",
    umur: 20,
    jenisKelamin: "pria",
    statusAktif: true,
    departemen: "",
    email: "",
    alamat: "",
    skill: [],
    gaji: 5000000,
  });

  const skillOptions = ["React", "Node.js", "UI/UX", "DevOps"];

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  }

  function handleSkillChange(skill: string) {
    setFormData((prev) => {
      const exists = prev.skill.includes(skill);

      return {
        ...prev,
        skill: exists
          ? prev.skill.filter((s) => s !== skill)
          : [...prev.skill, skill],
      };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(formData);

    alert("Data karyawan berhasil disimpan");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold">Form Data Karyawan</h1>

        <p className="mb-8 text-gray-500">
          Contoh form React dengan 10 jenis input berbeda
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 1. TEXT */}
          <div>
            <label className="mb-2 block font-medium">Nama Lengkap</label>

            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Masukkan nama"
              className="w-full rounded-lg border p-3"
            />
          </div>

          {/* 2. DATE */}
          <div>
            <label className="mb-2 block font-medium">Tanggal Lahir</label>

            <input
              type="date"
              name="tanggalLahir"
              value={formData.tanggalLahir}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>

          {/* 3. NUMBER */}
          <div>
            <label className="mb-2 block font-medium">Umur</label>

            <input
              type="number"
              name="umur"
              value={formData.umur}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />
          </div>

          {/* 4. RADIO GROUP */}
          <div>
            <label className="mb-3 block font-medium">Jenis Kelamin</label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="jenisKelamin"
                  value="pria"
                  checked={formData.jenisKelamin === "pria"}
                  onChange={handleChange}
                />
                Pria
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="jenisKelamin"
                  value="wanita"
                  checked={formData.jenisKelamin === "wanita"}
                  onChange={handleChange}
                />
                Wanita
              </label>
            </div>
          </div>

          {/* 5. TOGGLE / SWITCH */}
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h2 className="font-medium">Status Aktif</h2>

              <p className="text-sm text-gray-500">
                Apakah karyawan aktif bekerja
              </p>
            </div>

            <input
              type="checkbox"
              name="statusAktif"
              checked={formData.statusAktif}
              onChange={handleChange}
              className="h-5 w-5"
            />
          </div>

          {/* 6. SELECT */}
          <div>
            <label className="mb-2 block font-medium">Departemen</label>

            <select
              name="departemen"
              value={formData.departemen}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            >
              <option value="">Pilih Departemen</option>

              <option value="it">IT</option>

              <option value="hr">HR</option>

              <option value="finance">Finance</option>

              <option value="marketing">Marketing</option>
            </select>
          </div>

          {/* 7. EMAIL */}
          <div>
            <label className="mb-2 block font-medium">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@gmail.com"
              className="w-full rounded-lg border p-3"
            />
          </div>

          {/* 8. TEXTAREA */}
          <div>
            <label className="mb-2 block font-medium">Alamat</label>

            <textarea
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              placeholder="Masukkan alamat lengkap"
              rows={4}
              className="w-full rounded-lg border p-3"
            />
          </div>

          {/* 9. CHECKBOX MULTIPLE */}
          <div>
            <label className="mb-3 block font-medium">Skill</label>

            <div className="grid gap-3">
              {skillOptions.map((skill) => (
                <label key={skill} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.skill.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                  />

                  {skill}
                </label>
              ))}
            </div>
          </div>

          {/* 10. RANGE / SLIDER */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="font-medium">Ekspektasi Gaji</label>

              <span className="font-semibold">
                Rp {formData.gaji.toLocaleString("id-ID")}
              </span>
            </div>

            <input
              type="range"
              min={3000000}
              max={30000000}
              step={500000}
              name="gaji"
              value={formData.gaji}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-black p-4 font-semibold text-white transition hover:opacity-90"
          >
            Simpan Data Karyawan
          </button>
        </form>
      </div>
    </main>
  );
}
