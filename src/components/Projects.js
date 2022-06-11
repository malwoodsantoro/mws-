import React from "react";
import mbxImg from "../assets/mapbox.png"

const Projects = () => {

  return (
    <div className="bg-white grid md:grid-cols-2 mt-[12%] m-auto">
      <div>
        <img className="ml-auto rounded-md outline outline-offset-2 outline-blue-500 mr-24 self-end" src={mbxImg}></img>
      </div>
      <div className="mr-36">
      As a Frontend Engineer at Mapbox, I worked on maintaining and building upon our custom React component library, static site generator, and linting tools to empower product teams across the company to make contributions to documentation.
      <br/><a href="" className="tracking-wider font-bold"> Visit website.</a>
      </div>
      <div className="my-12 ml-36 mr-12">
      Created a tool to provide a better experience for users with vision impairment or low vision who
       encounter a web map and need to gather information from it using a screen reader. I decided to
        tackle the three main issues: (1) the location of the map is not described, (2) it’s only 
        possible to tab over existing features randomly because the tab-index of each feature is set to
         zero, and (3) the user isn’t given a way to meaningfully explore or move around the map. This
          implementation uses a bounding box that can be moved with the arrow keys. The direction the 
          user is moving is read aloud (i.e. “Moving North”) and then the list of POIs in the area are 
          announced. If a user selects a number corresponding to an announced place, the sidebar opens 
          with all of the details available about the POI.
      <br/><a href="" className="tracking-wider font-bold"> View project.</a>
      </div>
      <div>
        <img className="my-12 rounded-md outline outline-offset-2 outline-blue-500 content-start" src={mbxImg}></img>
      </div>
    </div>
  )
}

export default Projects;