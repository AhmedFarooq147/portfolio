"use client"
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export interface TypeItem{
  description:string
}

export const About = () => {
  const [items,setitems] = useState<TypeItem>()
  useEffect(()=>{
    const fetchData = async()=>{
      const data = await client.fetch(`*[_type == "about"][0]`)
      setitems(data);
    }
    fetchData()
  },[])
  return (
    <div className='bg-gray-900' id='About'>
     <section className="text-gray-300 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20 gap-8">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
        About
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
     {items?.description}
      </p>
    </div>

  </div>
</section>


    </div>
  )
}
