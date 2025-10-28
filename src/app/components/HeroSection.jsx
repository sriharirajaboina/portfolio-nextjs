"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion"

const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12 mt-15 ">
            <motion.div 
             initial={{opacity:0,scale:0.5}}
             animate={{opacity:1,scale:1}}
             transition={{duration:0.5}}
             className="col-span-8 place-self-center text-center sm:text-left justify-self-start ">
                <h1
                    className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold" 
                >
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400
                    to-pink-600">
                        Hello, I am {" "}
                    </span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                        'React Developer',
                        1000, 
                        'Front-End Developer',
                        1000,
                        'Software Developer',
                        1000,
                        'UI/Ux Designer',
                        1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#adb7be] w-[80%] text-base sm:text-lg lg:text-xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <div className="mt-8">
                    <button 
                    
                    className="px-6 py-3 w-full sm:w-fit rounded-full mr-4
                    bg-linear-to-br from-blue-500 via-purple-500 to-pink-500
                     hover:bg-slate-200 text-white font-bold">
                        Hire Me
                    </button>
                    <button 
                    
                    className="px-1 py-1 w-full sm:w-fit rounded-full bg-linear-to-br from-blue-500 
                    via-purple-500 to-pink-500  text-white  mt-3  font-bold">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download Cv
                        </span>
                    </button>
                </div>
            </motion.div>
            <motion.div 
             initial={{opacity:0,scale:0.5}}
             animate={{opacity:1,scale:1}}
             transition={{duration:0.5}}
             className="col-span-4 place-self-center mt-8 lg:mt-8">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px]
                lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/hero-image.png" 
                    alt="hero-image"
                    // fill={true}
                    width={300}
                    height={300}
                    className="absolute transform -translate-x-1/2
                    -translate-y-1/2 top-1/2 left-1/2"
                    />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection