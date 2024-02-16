"use client";

import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";



const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-7 place-self-centerd text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 '>Hello, I am
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Aditya',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'MERN STACK DEVELOPER',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE]  text-base sm:text-lg lg:text-xl mb-6'>
                        Full-Stack web developer with a focus on creating user-friendly and visually appealing website.
                    </p>
                    <div>
                        {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-600 to-orange-500 hover:bg-slate-200 text-white'>
                            Hire Me</button> */}
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-red-600 to-orange-500  hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-5 place-self-center'>
                    <div className="rounded-full  w-[250px] h-[250px]  relative lg:w-[400px] lg:h-[400px] mt-2">
                        <Image
                            src={'/images/hero.png'}
                            alt="hero image"
                            width={300}
                            height={300}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-3xl'
                        />

                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection