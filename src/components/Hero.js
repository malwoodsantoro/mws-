import React, { useState } from "react";
import profileImg from '../assets/mal.png'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero = () => {
  const [show, setShow] = useState(false);

  useState(true);

  return (
    <div className='mb-[-5%] w-full h-screen bg-blue-300 flex flex-col justify-between'>
      <div className="grid md:grid-cols-2 max-w-[1240px] mt-[12%] m-auto">
        <div className="flex flex-col items-center w-full px-24 text-center">
          <RoughNotationGroup show={show}>
            <RoughNotation show={true} type="highlight" color="#c53c3c" order={1} animationDuration={300}>
              <p className="py-3 text-5xl md:text-7xl font-bold">Mal</p>
            </RoughNotation>
            <RoughNotation show={true} type="highlight" color="#84aee1" order={2} animationDuration={300}>
              <p className="py-3 text-5xl md:text-7xl font-bold">Wood-</p>
            </RoughNotation>
            <RoughNotation show={true} type="highlight" color="#d9f3ff" order={3} animationDuration={300}s>
              <p className="py-3 text-5xl md:text-7xl font-bold">Santoro</p>
            </RoughNotation>
          <p className="text-2xl py-3 px-6">I believe the internet can be a more <RoughNotation show={true} type="circle" color="#607999" order={4} animationDuration={500}>human</RoughNotation> place where people can connect, find value, and make meaning through thoughtfully built <RoughNotation show={true} type="underline" color="#607999" order={5} animationDuration={500}>accessible</RoughNotation> applications and websites. </p>
          <button className="mt-6 content-center py-3 px-2 w-[50%] bg-gradient-to-r from-cyan-500 to-blue-500">Connect</button>
          </RoughNotationGroup>
        </div>
        <div>
          <img className='w-full rounded-md w-[60%] text-center' src={profileImg} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Hero;