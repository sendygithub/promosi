"use client"
import { useState } from "react"; 

export default function KalkulatorPage() {
const [totalBelanja, setTotalBelanja] = useState("");


const total =Number(totalBelanja)|| 0;
const diskon = total >100000? total * 0.15:0;
const TotalBayar = total -diskon;


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
                <h1 className="text-xl font-semibold text-gray-800 text-center">Kalkulator</h1>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1"> total Belanja</label>
                            <input
                            type="number"
                            inputMode="numeric"
                            placeholder="masukan total belanja"
                            value={totalBelanja}
                            onChange={(e)=> setTotalBelanja((e.target.value))}
                            className="w-full rounded-lg border border-gray-300 pc-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                         <span className="text-gray-600">Diskon</span>
                          <span className="font-medium text-red-500">
                            -Rp {diskon.toLocaleString("id-ID")}
                          </span>
                    </div>
                </div>
                
                <div  className="flex justify-between text-base font-semibold">
                     <span >total bayar</span>
                     <span className="text-green-600">
                        Rp {TotalBayar.toLocaleString("id-ID")} 
                     </span>
                </div>
           


           

             </div>
        </div>
    );
}