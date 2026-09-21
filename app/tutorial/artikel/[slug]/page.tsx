import React from 'react'
import prisma from "@/lib/prisma"
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/site';

async function AmbilArtikel(slug: string) {
const tampilkanartikel = await prisma.artikel.findFirst({
        where : {slug: slug},
    })
        return tampilkanartikel
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const data = await AmbilArtikel(slug);

    if (!data) {
        return {
            title: "Artikel tidak ditemukan",
            robots: { index: false, follow: false },
        };
    }

    return pageMetadata({
        title: data.judul,
        description: data.isi,
        path: `/tutorial/artikel/${data.slug}`,
    });
}

export default async function DetailArtikel({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params;
    const data = await AmbilArtikel(slug)

    if (!data){
        notFound()
    }
 
  return (
    <main className='p-10 justify-center items-center grid place-item-center'>
        <h1 className='text-3xl font-bold'>{data.judul}</h1>
        <p>slug: {data.slug}</p>
        <p>kategory : {data.category}</p>
        <p>isi cerita : {data.isi}</p>


        <Button className='bg-blue-700 mt-10 hover:bg-blue-900'>
            checkout now
            <ShoppingBag > checkout</ShoppingBag>
        </Button>
    
    </main>
  )
}

