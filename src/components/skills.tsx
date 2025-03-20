import React from 'react'
import { AiOutlineCheckSquare } from "react-icons/ai";

export const Skills = () => {
  return (
    <div id='Skills'>
        <section className="bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
       Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-200">
        My Skills
      </h1>
    </div>
    
    <div className="flex flex-wrap -m-4 ">
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-200 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-100% bg-gray-300 rounded-xl '>
            <div className='absolute h-1 w-[100%] bg-blue-500'></div>
           </div>
           <p className='text-right text-gray-200'>100%</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%]  md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-200 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-100% bg-gray-300 rounded-xl '>
            <div className='absolute h-1 w-[80%] bg-blue-500'></div>
           </div>
           <p className='text-right text-gray-200'>80%</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-200 text-lg title-font font-medium">
              JavaScript/TypeScript
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-100% bg-gray-300 rounded-xl '>
            <div className='absolute h-1 w-[85%] bg-blue-500'></div>
           </div>
           <p className='text-right text-gray-200'>85%</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-200 text-lg title-font font-medium">
              Tailwind-Css
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-100% bg-gray-300 rounded-xl '>
            <div className='absolute h-1 w-[90%] bg-blue-500'></div>
           </div>
           <p className='text-right text-gray-200'>90%</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-200 text-lg title-font font-medium">
              NextJS
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-100% bg-gray-300 rounded-xl '>
            <div className='absolute h-1 w-[90%] bg-blue-500'></div>
           </div>
           <p className='text-right text-gray-200'>90%</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare/>
            </div>
            <h2 className="text-gray-200 text-lg title-font font-medium">
              Sanity
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-100% bg-gray-300 rounded-xl '>
            <div className='absolute h-1 w-[90%] bg-blue-500'></div>
           </div>
           <p className='text-right text-gray-200'>90%</p>
            
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</section>

    </div>
  )
}
