import React from "react";
import mbxImg from "../assets/mapbox.png"
import a11yImg from "../assets/a11y.png"

const Projects = () => {

  return (
    <div className="bg-white">
      <h2 id="projects" className="md:scroll-mt-32 text-3xl font-bold mb-6 pt-6 md:pt-12 text-center">Projects</h2>
      <a href="#projects">
        <span aria-hidden="true" className="hidden">#</span>
        <span className="hidden">Section titled projects</span>
      </a>
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto pt-12 pb-12">
        <div className="object-scale-down w-[75%] md:w-[50%] md:justify-self-end">
          <img className="md:ml-auto rounded-md md:mr-6 md:self-end mb-6" src={mbxImg} alt="Mapbox logo"></img>
        </div>
        <div className="md:mr-40 2xl:mr-96 xl:mr-60 mr-6 ml-2 md:text-1xl md:ml-6 text-left md:mb-24 mb-12">
          As a Frontend Engineer at <span className="font-bold">Mapbox</span>, I work on maintaining and building all product documentation sites and systems by shipping performant and testable code. I build upon our documentation-specific React component library in addition to improving our testing and linting tools and static site generator. I participate in the design process by addressing user feedback, attending design critiques, and providing guidance and feedback informed by an understanding of technical constraints.
          <br /><div className="pt-3"><a href="https://docs.mapbox.com/" className="tracking-wider font-bold text-[#566e8a]"> Visit website</a></div>
        </div>
        <div className="pl-6 s:mt-24 pb-4 md:mb-6 md:ml-40 xl:ml-60 2xl:ml-96 md:mr-6 mr-2 text-right">
          <span className="font-bold">a11y-map-gl</span> is a project that uses the open source <a href="https://maplibre.org/">Maplibre project</a> to provide a better experience for users with vision impairment who
          encounter a web map and need to gather information from it. Developers can pass in a string description to provide additional context about the map to be read aloud by screen readers. The direction (based on bearing) that the
          user is moving is described (i.e. “Moving North”) and a list of places of interest in the area are queried and announced.
          <br /><div className="pt-3"><a href="https://github.com/malwoodsantoro/a11y-map-gl/" className="tracking-wider font-bold pt-6 text-[#566e8a]"> View project</a></div>
        </div>
        <div className="md:w-full w-[85%] md:place-self-start place-self-end">
          <div className="pt-4 object-scale-down md:mr-40 xl:mr-80 2xl:mr-96 mr-4 md:ml-6">
            <img className="rounded-md md:mr-auto" src={a11yImg} alt="Accessibility mapping tool demonstrating ability to move directional keys to query for places of interest in the area."></img>
          </div>
        </div>
      </div>
      <div className="text-center pb-12">
        <a href="https://github.com/malwoodsantoro/" className="tracking-wider font-bold text-[#566e8a]"> Visit Github </a>for additional projects
      </div>
    </div>
  )
}

export default Projects;