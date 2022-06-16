import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className='w-screen h-[80px] z-10 bg-[#4c82a7] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-end items-center w-full h-full'>
        <h1 className='text-3xl content-left font-bold mr-auto sm:text-4xl'>{"MW-S"}</h1>
        <div className="flex">
          <ul className='hidden md:flex flex ml-auto'>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-8' /> : <XIcon className='w-8' />}
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w0full'>Skills</li>
        <li className='border-b-2 border-zinc-300 w0full'>Projects</li>
        <li className='border-b-2 border-zinc-300 w0full'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;