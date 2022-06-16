import React from "react";
import mbxImg from "../assets/mapbox.png"
import a11yImg from "../assets/a11y.png"

const Projects = () => {

  return (
    <div>
      <a name="projects"></a>
      <div className="bg-white grid md:grid-cols-2 mt-[12%] mb-[12%] m-auto">
        <div>
          <img className="h-80 w-192 ml-auto rounded-md outline outline-offset-4 outline-blue-500 mr-24 self-end" src={mbxImg}></img>
        </div>
        <div className="mr-96 text-2xl">
          As a Frontend Engineer at <span className="text-4xl font-bold">Mapbox</span>, I work on maintaining and building upon our custom React component library, static site generator, and linting tools to empower product teams across the company to make contributions to technical documentation.
          <br /><a href="" className="tracking-wider font-bold"> Visit website.</a>
        </div>
        <div className="my-12 ml-96 mr-12 text-3xl">
          <span className="text-4xl font-bold">a11y-map-gl</span> is a project to provide a better experience for users with vision impairment or low vision who
          encounter a web map and need to gather information from it using a screen reader. The direction the
          user is moving is read aloud (i.e. “Moving North”) and then the list of POIs in the area are
          announced.
          <br /><a href="" className="tracking-wider font-bold"> View project.</a>
        </div>
        <div>
          <img className="my-12 rounded-md outline outline-offset-2 outline-blue-500 content-start mr-auto w-192 h-80" src={a11yImg}></img>
        </div>
        <div>
          <img className="ml-auto rounded-md outline outline-offset-2 outline-blue-500 mr-24 self-end" src={mbxImg}></img>
        </div>
        <div className="mr-36">
          Learning projects
          <br /><a href="" className="tracking-wider font-bold"> Visit website.</a>
        </div>
      </div>
    </div>
  )
}

export default Projects;