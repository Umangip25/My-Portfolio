import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}