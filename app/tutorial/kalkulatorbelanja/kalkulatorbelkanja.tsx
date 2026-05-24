"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CodeViewerKalkulatorBelanja from "./codeviewerkalkulatorbelanja";


export default function KalkulatorBelanja  (){
  //state untuk daftar harga
  const [daftarHarga, setDaftarHarga] = useState<number[]>([]);
  const [inputBaru, setInputBaru] = useState<string>("");

    //alur logika: menghitung total
    //gunakan reducer

    const hitungTotal =()=>{
        let total =0; //penampung
        daftarHarga.forEach((harga) =>{
            total+= harga;
        })
        return total;
    }
    
    const tambahHarga = () => {
      const nilai = parseFloat(inputBaru);
      if(!isNaN(nilai)){
        setDaftarHarga([...daftarHarga, nilai]);
        setInputBaru("")
      }
    };

    return(

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        

        {/* BAGIAN KANAN: Form Input */}

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm border border-gray-200 mt-15">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 mb-4 text-center">
            Kalkulator Belanja Sederhana
          </CardTitle>
        </CardHeader>


        <CardContent className="space-y-6">
            <Input
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-center text-black"
            type="number"
            placeholder="masukan angka"
            value={inputBaru}
            onChange={(e)=> setInputBaru(e.target.value)}/>
            <Button onClick={tambahHarga} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-sm"> Tambah</Button>

            {/* Daftar Harga */}
          <div className="space-y-2">
            <h3 className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm border border-blue-200">Daftar Item:</h3>
            <ul className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm border border-blue-200">

              {daftarHarga.map((harga, index) => (
                <li key={index} className="py-1 flex justify-between">
                  <span>Barang {index + 1}</span>
                  <span className="font-mono text-white-600">Rp {harga.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hasil Akhir */}
          <div className="pt-4 border-t flex justify-between items-center">
            <span className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm">Total Akhir:</span>
            <span className="text-2xl font-bold text-green-600">
              Rp {hitungTotal().toLocaleString()}
            </span>
          </div>

          </CardContent>
          </Card>


        </div>


        {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="text-white flex flex-col justify-center">
          
          <CodeViewerKalkulatorBelanja/>
        </div>

      </div>
    </div>

        


    )
    
 


  
}

