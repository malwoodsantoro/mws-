import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import mwsImg from '../assets/draw.png'

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className='w-screen h-[80px] z-10 bg-[#79afcc] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-end items-center w-full h-full'>
        <h1 className='content-left font-bold mr-auto sm:text-4xl'><img src={mwsImg} className="w-[40%] md:w-[20%]" alt="Mal Wood-Santoro logo"></img>
        </h1>
        <div className="flex">
          <ul className='hidden md:flex flex ml-auto'>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div role="menu" className='md:hidden' onClick={handleClick} onKeyDown={handleClick} tabIndex={0}>
          {!nav ? <MenuIcon className='w-8' /> : <XIcon className='w-8' />}
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 py-'}>
        <li className='border-b-2 border-zinc-300 w0full'><a href="#skills">Skills</a></li>
        <li className='border-b-2 border-zinc-300 w0full'><a href="#projects">Projects</a></li>
        <li className='border-b-2 border-zinc-300 w0full'><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar;