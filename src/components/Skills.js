import React from 'react';

const Skills = () => {
  return (
    <div>
      <div className='flex flex-row w-full justify-center bg-[#96b6cf]'>
        <div className="flex flex-col mt-12 mb-12 py-8 md:min-w-[70%] mx-3 px-6 bg-zinc-100 border border-slate-300 rounded-xl text-center shadow-xl">
          <h2 className="scroll-mt-2 md:scroll-mt-52 text-3xl font-bold mb-6">Skills</h2>
          <a href="#skills">
            <span aria-hidden="true" className="hidden">#</span>
            <span className="hidden">Section titled skills</span>
          </a>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 bg-zinc-100 place-items-center">
            <div className="flex py-2 text-slate-500">Javascript</div>
            <div className="flex py-2 text-slate-500">React</div>
            <div className="flex py-2 text-slate-500">GraphQL</div>
            <div className="flex py-2 text-slate-500">REST</div>
            <div className="flex py-2 text-slate-500">Typescript</div>
            <div className="flex py-2 text-slate-500">WCAG and Accessibility<br /> compliance</div>
            <div className="flex py-2 text-slate-500">HTML5/CSS3</div>
            <div className="flex py-2 text-slate-500">Flexbox & Grid</div>
            <div className="flex py-2 text-slate-500">TailwindCSS</div>
            <div className="flex py-2 text-slate-500">SASS</div>
            <div className="flex py-2 text-slate-500">Jest</div>
            <div className="flex py-2 text-slate-500">REST</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills; 