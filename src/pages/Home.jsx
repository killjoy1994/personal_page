import React from 'react'
import Navbar from '../components/Navbar'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';


export default function Home() {
    const text = "Bagus Nugroho";
    const letters = text.split('');

    return (
        <motion.div initial={{opacity: 0, y: -500}} animate={{opacity: 1, y: 0}} transition={{duration: 1}}>
            <Navbar />
            <main  className='flex justify-center items-center mx-auto min-h-screen'>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-[60px] text-center font-bold text-slate-50 cursor-pointer'>
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
                    <p className='text-center text-xl font-semibold text-slate-50'>I'm a frontend developer, Lorem ipsum dolor sit amet.</p>
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
        </motion.div>
    )
}
