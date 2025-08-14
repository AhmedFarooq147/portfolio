"use client"
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Project = () => {
  const [projects,setProjects] = useState([])
  useEffect(() => {
    const fetchProjects = async () => {
      const fetchData = await client.fetch(`
        *[_type == "projects"]{
          "imageUrl": image.asset->url,
          description,
          projecttitle,
          projectsubtitle,
          url
        }
      `);
      setProjects(fetchData);
    };

    fetchProjects();
  }, []);
  return (
    <div id='Projects'>
      <section className="bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
              My Projects
            </h2>




          </div>
          <div  className="flex flex-wrap -m-4">
             {projects.map((item:Typenone,i)=>{
              return(
                
                <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
                <div  className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.imageUrl}
                />

                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-700 bg-gray-800 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    {item.projecttitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {item.projectsubtitle}
                  </h1>
                  <p className="leading-relaxed text-white line-clamp-3">
                    {item.description}
                  </p>
                  <Link target='_blank' className='text-blue-500 hover:underline' href={item.url}><p >View Projects</p></Link>
                </div>
              </div>
              </div>
            
         

          
              )
             })} 
            </div>
        </div>
      </section>

    </div>
  )
}

export default Project
interface Typenone{
  imageUrl:string,
  projecttitle:string,
  projectsubtitle:string
  description:string,
  url:string


}
