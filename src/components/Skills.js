import React from 'react';

const Skills = () => {
  return (
    <div>
      <a name="skills"></a>
      <div className='flex flex-row w-full justify-center bg-[#00bcff]'>
        <div className="flex flex-col mt-12 mb-12 py-8 md:min-w-[70%] mx-3 bg-zinc-100 border border-slate-300 rounded-xl text-center shadow-xl">
          <p className='text-4xl font-bold mb-6'>Skills</p>
          <div class="grid grid-cols-4 gap-4 bg-zinc-100 place-items-center">
            <div className="flex py-2 text-slate-500">Javascript</div>
            <div className="flex py-2 text-slate-500">React</div>
            <div className="flex py-2 text-slate-500">GraphQL</div>
            <div className="flex py-2 text-slate-500">REST</div>
            <div className="flex py-2 text-slate-500">Typescript</div>
            <div className="flex py-2 text-slate-500">WCAG and Accessibility<br /> compliance</div>
            <div className="flex py-2 text-slate-500">HTML5/CSS3</div>
            <div className="flex py-2 text-slate-500">REST</div>
            <div className="flex py-2 text-slate-500">TailwindCSS</div>
            <div className="flex py-2 text-slate-500">SASS</div>
            <div className="flex py-2 text-slate-500">GraphQL</div>
            <div className="flex py-2 text-slate-500">REST</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills; 