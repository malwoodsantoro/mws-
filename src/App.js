import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
