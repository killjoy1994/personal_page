import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className='fixed top-0 h-[80px] bg-transparent px-12 w-full'>
            <div className='container w-full h-full flex items-center px-10 justify-between'>
                <h1 className='logo text-4xl tracking-wide font-semibold text-slate-800'>BAGUS</h1>
                <ul className='h-6 flex gap-x-5 font-2xl tracking-wide font-medium cursor-pointer'>
                    <li className='transition text-slate-600 hover:text-slate-900'><a href="">Home</a></li>
                    <li className='transition text-slate-600 hover:text-slate-900'><a href="">About</a></li>
                    <li className='transition text-slate-600 hover:text-slate-900'><a href="">Portofolio</a></li>
                    <li className='transition text-slate-600 hover:text-slate-900'><a href="">Resume</a></li>
                </ul>
            </div>          
        </div>
    </nav>
  )
}
