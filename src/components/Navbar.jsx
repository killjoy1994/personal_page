import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <div className='fixed top-0 h-[80px] bg-transparent px-12 w-full'>
            <div className='container w-full h-full flex items-center px-10 justify-between'>
                <h1 className='logo text-4xl tracking-wide font-semibold text-white'>BAGUS</h1>
                {/* For Large Screen */}
                <ul className='hidden md:flex h-6 gap-x-5 font-2xl tracking-wide font-semibold cursor-pointer'>
                    <li className='transition text-white hover:text-slate-900'><Link to="/">Home</Link></li>
                    <li className='transition text-white hover:text-slate-900'><Link to="/about">About</Link></li>
                    <li className='transition text-white hover:text-slate-900'><Link to="/portofolio">Portofolio</Link></li>
                    <li className='transition text-white hover:text-slate-900'><Link to="/Resume">Resume</Link></li>
                </ul>
                {/* For Phone and Tablets */}
            </div>          
        </div>
    </nav>
  )
}
