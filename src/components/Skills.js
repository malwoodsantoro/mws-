import React from 'react';

const Skills = () => {
  return (
    <div className='flex flex-row w-full justify-center bg-yellow-200'>
      <div className="bg-red-200 flex flex-col mt-12 mb-12 py-8 md:min-w-[70%] mx-3 bg-zinc-100 border border-slate-300 rounded-xl text-center shadow-xl">
        <p className='text-4xl font-bold mb-6'>Skills</p>
        <div className="flex justify-between flex-wrap px-2">
          <div className="flex px-4 py-2 text-slate-500">Javascript</div>
          <div className="flex px-4 py-2 text-slate-500">React</div>
          <div className="flex px-4 py-2 text-slate-500">GraphQL</div>
          <div className="flex px-4 py-2 text-slate-500">REST</div>
        </div>
        <div className="flex justify-between flex-wrap px-2">
          <div className="flex px-4 py-2 text-slate-500">Javascript</div>
          <div className="flex px-4 py-2 text-slate-500">WCAG and Accessibility compliance</div>
          <div className="flex px-4 py-2 text-slate-500">GraphQL</div>
          <div className="flex px-4 py-2 text-slate-500">REST</div>
        </div>
      </div>
    </div>
  )

}

export default Skills; 