import React from 'react'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'




export default async function TambahProductpage () {

async function tambahProduct (formData: FormData) {
    'use server'
    const name = formData.get('name') as string
    const price = (formData.get('price') as string,10)
    const category = formData.get('category') as string

    await prisma.product.create({
        data:{name, price, category}
    });

    redirect('/tutorial/product');
}

// deklarasi untuk tabel prisma
const items = await prisma.product.findMany();




  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* FORM PRODUCT */}
        <div className='w-full md:w-1/2 p-8'>
        <h2 className='text-2xl font-bold mb-6 text-gray-800'> tambah product baru</h2>
        <form action={tambahProduct} className='space-y-4'>
            <div>
                <label className='block text-sm font-medium text-gray-700'> Product Name</label>
                    <input
                    name='name'
                    type='text'
                    required
                    className='mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline:none focus:ring-blue-500 focus:border-blue-500'
                    placeholder='contoh:baju'/>
            </div>

            {/* FORM INPUT */}

            <div>
                <label className='block text-sm font-medium text-gray-700'> Harga</label>
                    <input
                    name='price'
                    type='number'
                    required
                    className='mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline:none focus:ring-blue-500 focus:border-blue-500'
                    placeholder='contoh:100.000'/>
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'> Kategory</label>
                    <select
                    name='category'
                    className='mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    >
                    <option value='baju'>Baju</option>
                    <option value='celana'>Celana</option>
                    <option value='sepatu'>Sepatu</option>
                    </select>
            </div>
            <button type='submit'
            className='mt-5 w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold'>
                simpan
            </button>
        </form>
    </div>





    {/* TABLE */}

    <div className="text-black w-full md:w-1/2 p-8 justify-center">
        <table>
            <thead>
                <tr>
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Category</th>
                </tr>
            </thead>


            <tbody>
                {items.length>0?(items.map((items)=>(
                    <tr key={items.id}>
                        <td className="border px-4 py-2">{items.id}</td>
                        <td className="border px-4 py-2">{items.name}</td>
                        <td className="border px-4 py-2">{items.price}</td>
                        <td className="border px-4 py-2">{items.category}</td>
                    </tr>   
                )))
                
                :
                
                (<p>data masih kosong</p>)  
                }
            </tbody>
        </table>
    </div>
    













    </div>
</div> 
  )
}

