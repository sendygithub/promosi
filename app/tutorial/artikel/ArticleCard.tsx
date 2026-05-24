"use client"; // Wajib agar bisa pakai onClick dan confirm

import { Trash, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';



export function ArticleCard({artikel}:{artikel:any}){
    const router = useRouter()

    const handlehapus = async (e: React.MouseEvent)=>{
        e.preventDefault();

        if(confirm(`yakin hapus${artikel.judul}?`)){
            const res = await fetch(
                `/api/artikel/${artikel.id}`,{method:"DELETE"});
                if (res.ok){
                    alert("berhasil di hapus!");
                    router.refresh();

                } else{
                    alert("gagal hapus data")
                }
            
        }
    }

    return(

        <div className='group border rounded-lg p-5 relativee bg-white shadow-sm hover:shadow-md transition'>
            

         <Link  href={`/tutorial/artikel/${artikel.slug}`}>

           <div className='group p-5 relative' key={artikel.id}>
            <button  onClick={handlehapus} className='absolute top-2 right-2 p-1 bg-red-100 text-red-600 hover:bg-red-500 hover:text-white rounded-full hidden group-hover:block transition z-10'>
                            <Trash size={24}></Trash>
         </button>
                <h2 className='font-bold text-xl mb-2 text-gray-800'>judul :{artikel.judul}</h2>
                <h2 className='font-bold text-xl mb-2 text-gray-800'>kategory:{artikel.category}</h2>
                 <p className='text-gray-600 text-sm leading-relaxed'>
                    slug : {artikel.slug}
                </p>
                <p className='text-gray-600 text-sm leading-relaxed'>
                   isi artikel : {artikel.isi}
                </p>
            </div>

            <Button className='bg-orange-600 hover:bg-orange-700'> add to chart
                <ShoppingCart></ShoppingCart>
            </Button>
            
            </Link>

        </div>
    )
}

export default ArticleCard
