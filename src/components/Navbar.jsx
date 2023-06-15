import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

export default function Navbar({className}) {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => {
    setToggle(prevState => {
      return !prevState
    })
  }

  console.log("Toogle: ", toggle)

  return (
    <nav>
        <div className={twMerge('fixed top-0 z-50 w-full', className)}>
            <div className='md:px-12 px-6 h-[80px] flex items-center justify-between relative'>
                <a href='/' className='inline-block logo text-4xl tracking-wide font-semibold text-white'>BAGUS</a>
                {/* For Large Screen */}
                <ul className='hidden md:flex h-6 gap-x-5 font-2xl tracking-wide font-semibold cursor-pointer'>
                    <li className='transition text-white hover:text-slate-700'><Link to="/">Home</Link></li>
                    <li className='transition text-white hover:text-slate-700'><Link to="/about">About</Link></li>
                    <li className='transition text-white hover:text-slate-700'><Link to="/portofolio">Contact</Link></li>
                </ul>
                {/* For Phone and Tablets */}
                <div className='block md:hidden'>
                  {!toggle ? <button onClick={() => toggleHandler()}><GiHamburgerMenu className='text-slate-50 text-2xl'/></button> : <button onClick={() => toggleHandler()}><AiOutlineClose className='text-slate-50 text-3xl'/></button>}
                </div>
                <div className={twMerge("absolute right-10 py-3 top-12 w-16",toggle ? "visible" : "hidden")}>
                  <ul className='text-lg text-slate-50 font-semibold'>
                    <li className='hover:text-slate-700'>Home</li>
                    <li className='hover:text-slate-700'>About</li>
                    <li className='hover:text-slate-700'>Contact</li>
                  </ul>
                </div>
            </div>          
        </div>
    </nav>
  )
}
