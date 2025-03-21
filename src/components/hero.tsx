'use client'
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import logo from '../../public/img/Screenshot 2025-03-19 014200.png'

export function Hero() {
    return (
        <div className='flex justify-center '>
            <section className="text-gray-300 body-font bg-fixed bg-gray-900 ">
                <div className="container mx-auto flex px-5 py-24 pl-28 pr-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <span className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            I am
                            <br className="hidden lg:inline-block" />
                            <h1 className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'><Typewriter 
                                options={{
                                    strings: ['Web Developer', 'UI/UX Designer','Sanity Expert'],
                                    autoStart: true,
                                    
                                    loop: true,
                                }}
                            /></h1>
                        </span>
                        <div className="w-[100px] h-[3px] bg-blue-700 "></div>
                        <p className="mb-8 leading-relaxed">
                        I am a passionate Web Developer, Sanity expert, and UI/UX Designer with a keen eye for creating intuitive and engaging digital experiences. With expertise in modern web technologies, I specialize in building scalable, high-performance websites and applications. Whether it&apos;s front-end magic, back-end efficiency, or CMS mastery, I ensure seamless user interactions with clean and modern designs.
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
                            className="object-cover h-[400px] w-[300px] object-center rounded-3xl"
                            alt="hero"
                            src={logo}
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}
