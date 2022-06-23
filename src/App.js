import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App bg-[#E5E1E0]">
      <Navbar />
      <Hero />
      <a href="/#skills" name="skills"><Skills /></a>
      <a href="/#projects" name="projects"><Projects /></a>
      <a href="/#contact" name="contact"><Contact /></a>
      <footer className="text-center lg:text-left">
        <div className="text-gray-700 text-center p-8 bg-[#E5E1E0]">
          ©2022 All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
