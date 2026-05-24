
import prisma from '@/lib/prisma'
import React from 'react'
import { redirect } from 'next/navigation'
import ArticleCard from './ArticleCard'


export default async function Artikelpage () {


              {/* DEKLARASI SIMPAN DATA*/}
    async function TambahArtikel(formData:FormData){
        "use server"
        const judul = formData.get('judul') as string
        const slug =formData.get('slug') as string
        const category =formData.get('category') as string
        const isi =formData.get('isi') as string

        await prisma.artikel.create ({
            data:{
               judul,    // Ini singkatan dari judul: judul
            category, // Sekarang Prisma harusnya sudah kenal ini
            isi,
            slug
            }
        });
        redirect('/tutorial/artikel')
    }



        {/* DEKLARASI AMBIL DATA*/}
    const isitabel = await prisma.artikel.findMany();

  return (
   <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* FORM INPUT */}
        <div className='w-full md:w-1/2 p-8'>
        <h2 className='text-2xl font-bold mb-6 text-gray-800'> Tambah artikel baru</h2>
        <form  className='space-y-4' action={TambahArtikel}>
            <div>
                <label className='block text-sm font-medium text-gray-700'> judul artikel</label>
                    <input
                    name='judul'
                    type='text'
                    required
                    className='mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline:none focus:ring-blue-500 focus:border-blue-500'
                    placeholder='contoh: malin kundang'/>
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'> Slug artikel</label>
                    <input
                    name='slug'
                    type='text'
                    required
                    className='mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline:none focus:ring-blue-500 focus:border-blue-500'
                    placeholder='contoh: slug-001'/>
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'> Kategory</label>
                    <select
                    name='category'
                    className='mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    >
                    <option value='cerpen'>Cerpen</option>
                    <option value='fiksi'>Fiksi</option>
                    <option value='story'>Story</option>
                    </select>
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'> isi</label>
                    <input
                    name='isi'
                    type='text'
                    required
                    className='mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline:none focus:ring-blue-500 focus:border-blue-500'
                    placeholder='isi artikel'/>
            </div>
            <button type='submit' 
            className='mt-5 w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold'>
                post
            </button>
        </form>
    </div>





    {/* CARD */}
        <div className='grid grid-cols-3 gap-4 p-4 '>
           {isitabel.length>0?(isitabel.map((isitabel)=>
           (

            <ArticleCard key={isitabel.id} artikel={isitabel}/>
            


           )
           ))
        :(<p>data masih kosong</p>)
        }
            
        </div>
    </div>
</div> 
  )
}

