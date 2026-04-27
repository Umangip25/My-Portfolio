import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Recommendations from "./components/Recommendations";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Recommendations />
      <Contact />
    </main>
  );
}