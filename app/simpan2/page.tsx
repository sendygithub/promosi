// app/page.tsx
"use client";

import { useState } from "react";

interface KaryawanForm {
  nama: string;
  tanggalLahir: string;
  umur: number | "";
  jenisKelamin: "Laki-laki" | "Perempuan" | "";
  status: boolean;
  department: string;
  gaji: number | "";
  pendidikan: string;
  keterampilan: string[];
  kontrakKerja: "Tetap" | "Kontrak" | "Magang" | "";
  tglMulaiKerja: string;
}

export default function FormKaryawan() {
  const [formData, setFormData] = useState<KaryawanForm>({
    nama: "",
    tanggalLahir: "",
    umur: "",
    jenisKelamin: "",
    status: true,
    department: "",
    gaji: "",
    pendidikan: "",
    keterampilan: [],
    kontrakKerja: "",
    tglMulaiKerja: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      if (name === "keterampilan") {
        const currentValues = formData.keterampilan;
        if (checkbox.checked) {
          setFormData({ ...formData, keterampilan: [...currentValues, value] });
        } else {
          setFormData({
            ...formData,
            keterampilan: currentValues.filter((v) => v !== value),
          });
        }
      }
    } else if (type === "number") {
      setFormData({ ...formData, [name]: value === "" ? "" : Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      jenisKelamin: e.target.value as "Laki-laki" | "Perempuan",
    });
  };

  const handleToggleChange = () => {
    setFormData({ ...formData, status: !formData.status });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data Karyawan:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Form Input Data Karyawan
          </h1>
          <p className="text-blue-100 text-center mt-2">
            Lengkapi data karyawan dengan benar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* 1. Input Text - Nama */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleInputChange}
              placeholder="Masukkan nama lengkap"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              required
            />
          </div>

          {/* 2. Input Date - Tanggal Lahir */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Tanggal Lahir
            </label>
            <input
              type="date"
              name="tanggalLahir"
              value={formData.tanggalLahir}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* 3. Input Number - Umur */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Umur (Tahun)
            </label>
            <input
              type="number"
              name="umur"
              value={formData.umur}
              onChange={handleInputChange}
              placeholder="Masukkan umur"
              min="17"
              max="65"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* 4. Radio Group - Jenis Kelamin */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Jenis Kelamin
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="jenisKelamin"
                  value="Laki-laki"
                  checked={formData.jenisKelamin === "Laki-laki"}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Laki-laki</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="jenisKelamin"
                  value="Perempuan"
                  checked={formData.jenisKelamin === "Perempuan"}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Perempuan</span>
              </label>
            </div>
          </div>

          {/* 5. Toggle Switch - Status Aktif */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Status Karyawan
            </label>
            <button
              type="button"
              onClick={handleToggleChange}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                formData.status ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  formData.status ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="ml-3 text-sm text-gray-600">
              {formData.status ? "Aktif" : "Tidak Aktif"}
            </span>
          </div>

          {/* 6. Select Dropdown - Department */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            >
              <option value="">Pilih Department</option>
              <option value="IT">IT</option>
              <option value="HR">Human Resources</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Operations">Operations</option>
            </select>
          </div>

          {/* 7. Input Number - Gaji */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Gaji (Rp)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">Rp</span>
              <input
                type="number"
                name="gaji"
                value={formData.gaji}
                onChange={handleInputChange}
                placeholder="Masukkan gaji"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* 8. Select - Pendidikan */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Pendidikan Terakhir
            </label>
            <select
              name="pendidikan"
              value={formData.pendidikan}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            >
              <option value="">Pilih Pendidikan</option>
              <option value="SMA">SMA/Sederajat</option>
              <option value="D3">D3</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
              <option value="S3">S3</option>
            </select>
          </div>

          {/* 9. Checkbox Group - Keterampilan */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Keterampilan
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                "JavaScript",
                "Python",
                "Java",
                "React",
                "Node.js",
                "Database",
              ].map((skill) => (
                <label key={skill} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="keterampilan"
                    value={skill}
                    checked={formData.keterampilan.includes(skill)}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 10. Radio Group Alternatif - Jenis Kontrak */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Jenis Kontrak Kerja
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="kontrakKerja"
                  value="Tetap"
                  checked={formData.kontrakKerja === "Tetap"}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Tetap</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="kontrakKerja"
                  value="Kontrak"
                  checked={formData.kontrakKerja === "Kontrak"}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Kontrak</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="kontrakKerja"
                  value="Magang"
                  checked={formData.kontrakKerja === "Magang"}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Magang</span>
              </label>
            </div>
          </div>

          {/* Bonus: Input Date lainnya - Tanggal Mulai Kerja */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Tanggal Mulai Kerja
            </label>
            <input
              type="date"
              name="tglMulaiKerja"
              value={formData.tglMulaiKerja}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Simpan Data Karyawan
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
              ✓ Data karyawan berhasil disimpan!
            </div>
          )}
        </form>

        {/* Preview Data */}
        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Preview Data:
          </h3>
          <pre className="text-sm text-gray-600 overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
