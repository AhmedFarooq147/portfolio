'use client'
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import logo from '../../public/img/Screenshot 2025-03-19 014200.png'

export function Hero() {
    return (
        <div className='flex justify-center '>
            <section className="text-gray-300 body-font w-full bg-fixed bg-gray-900  ">
                <div className="container flex  justify-center sm:px-5  py-24 sm:pl-28 sm:pr-20 md:flex-row md:justify-between flex-col  items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 sm:w-full w-full flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <span className="title-font sm:text-4xl text-3xl w-full mb-4 font-medium text-white">
                            I am
                            <br className="hidden lg:inline-block" />
                            <h1 className='bg-gradient-to-l from-purple-400 to-pink-500 w-full bg-clip-text text-transparent'><Typewriter 
                                options={{
                                    strings: ['Web Developer',"JavaScript Dveloper", 'UI/UX Designer','Sanity CMS Expert',"Python Developer","Streamlit Developer","Open AI Agent Developer"],
                                    autoStart: true,
                                    
                                    loop: true,
                                }}
                            /></h1>
                        </span>
                        <div className="w-[100px] h-[3px] bg-blue-700 "></div>
                        <p className="sm:mb-8  mb-8 ">
                        I am a passionate Web Developer, Sanity expert, UI/UX Designer, Streamlit Developer and Open AI Agent Developer with a keen eye for creating intuitive and engaging digital experiences. With expertise in modern web technologies, I specialize in building scalable, high-performance websites and applications. Whether it is front-end magic, back-end efficiency, or CMS mastery, I ensure seamless user interactions with clean and modern designs.
                        </p>
                        <div className="flex justify-center">
                        <Link href={"#Contact"}>
                            <button className="inline-flex text-white bg-cyan-500 hover:bg-cyan-600 transition-all border-0 py-2 px-6 focus:outline-none rounded text-lg">
                                Contact Me!
                            </button></Link>
                            
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            className="object-cover h-[400px]  sm:w-[300px] object-center rounded-3xl"
                            alt="hero"
                            src={logo}
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}