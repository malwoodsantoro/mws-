import React from "react";
import profileImg from '../assets/mal.png'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { HighlightAnimation } from "../components/HighlightAnimation";

const Hero = () => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

  return (
    <div className='w-full h-screen bg-white flex flex-col justify-between'>
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col items-center justify-center w-full px-24 py-8 text-center">
        <RoughNotationGroup show={true}>
          <HighlightAnimation color={colors[0]}>
            <h1 className="py-3 text-5xl md:text-7xl font-bold">Mal<br /> Wood-<br/>Santoro</h1>
          </HighlightAnimation>
          </RoughNotationGroup>
            <p className="text-2xl py-2"> Software Engineer</p>
            <button className="content-center py-3 px-2 w-[50%] bg-gradient-to-r from-cyan-500 to-blue-500">Connect</button>
        </div>
        <div>
          <img className='w-full rounded-md' src={profileImg} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Hero;