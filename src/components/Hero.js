import React, { useState } from "react";
import profileImg from '../assets/mal.png'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


const Hero = () => {
  const [show] = useState(false);

  useState(true);

  return (
    <div className='md:mb-[-2%] mb-[10%] w-full h-screen bg-[#d8c99b] flex flex-col justify-between'>
      <div className="grid md:grid-cols-2 max-w-[1240px] mt-[6%] m-auto">
        <div className="flex flex-col items-center w-full md:px-24 text-center mt-24 md:mt-12 m:mt-2 ">
          <RoughNotationGroup show={show}>
            <RoughNotation show={true} type="highlight" color="#ACB5B9" order={1} animationDuration={300}>
              <p className="py-3 text-4xl md:text-5xl font-bold">Mal</p>
            </RoughNotation>
            <RoughNotation show={true} type="highlight" color="#88aebe" order={2} animationDuration={300}>
              <p className="py-3 text-4xl md:text-5xl font-bold">Wood-</p>
            </RoughNotation>
            <RoughNotation show={true} type="highlight" color="#4a7586" order={3} animationDuration={300}>
              <p className="py-3 text-4xl md:text-5xl font-bold">Santoro</p>
            </RoughNotation>
            <p className="md:text-2xl py-3 px-6">I believe the internet can be a more <RoughNotation show={true} type="circle" color="#607999" order={4} animationDuration={500}>human</RoughNotation> place where people can connect, find value, and make meaning through thoughtfully built <RoughNotation show={true} type="underline" color="#607999" order={5} animationDuration={500}>accessible</RoughNotation> applications and websites. </p>
            <button className="mt-2 rounded-full content-center px-2 py-2 w-[25%] bg-gradient-to-r from-[#ACB5B9] to-[#79afcc] text-black mb-6"><a href="#contact">Connect</a></button>
          </RoughNotationGroup>
        </div>
        <div className='flex flex-row md:place-self-start place-self-center bg-contain bg-[#e6f4f1] w-[80%] md:mt-12'>
          <img className='w-full rounded-sm' src={profileImg} alt="/" />
        </div>
      </div>
      
    </div>
  )
}

export default Hero;