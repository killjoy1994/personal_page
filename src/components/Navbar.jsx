import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export default function Navbar({className}) {
  return (
    <nav>
        <div className={twMerge('fixed top-0 z-50 w-full', className)}>
            <div className='md:px-12 px-6 h-[80px] flex items-center justify-between'>
                <a href='/' className='inline-block logo text-4xl tracking-wide font-semibold text-white'>BAGUS</a>
                {/* For Large Screen */}
                <ul className='hidden md:flex h-6 gap-x-5 font-2xl tracking-wide font-semibold cursor-pointer'>
                    <li className='transition text-white hover:text-slate-700'><Link to="/">Home</Link></li>
                    <li className='transition text-white hover:text-slate-700'><Link to="/about">About</Link></li>
                    <li className='transition text-white hover:text-slate-700'><Link to="/portofolio">Contact</Link></li>
                </ul>
                {/* For Phone and Tablets */}
            </div>          
        </div>
    </nav>
  )
}
