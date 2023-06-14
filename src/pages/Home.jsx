import React from 'react'
import Navbar from '../components/Navbar'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Wrapper from '../components/Wrapper';


export default function Home() {
    const text = "HELLO I'M BAGUS";
    const letters = text.split('');

    return (
        <Wrapper>
            <Navbar className='bg-transparent' />
            <main  className='flex justify-center items-center mx-auto min-h-screen'>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-4xl md:text-6xl text-center font-bold text-slate-50 cursor-pointer'>
                        {letters.map((letter, index) => {
                            if(letter != " ") {
                                return (
                                    <motion.span
                                        key={index}
                                        whileHover={{ scale: 1.2 }}
                                        style={{ display: 'inline-block' }}
                                        >
                                            {letter}
                                    </motion.span>
                                )
                            } else {
                                return letter
                            }
                        })} 
                    </h1>
                    <p className='text-center text-xl md:text-2xl font-semibold text-slate-50'>I'm a frontend developer</p>
                    <ul className='mt-3 flex gap-x-3'>
                        <li>
                            <a href="">
                                <BsLinkedin className='text-white text-2xl hover:scale-105' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsGithub className='text-white text-2xl hover:scale-105' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsTwitter className='text-white text-2xl hover:scale-105' />
                            </a>
                        </li>
                    </ul>
                </div>          
            </main>
        </Wrapper>
    )
}
