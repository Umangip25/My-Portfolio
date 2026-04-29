import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Recommendations from "./components/Recommendations";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Umangi Prajapati',
    url: 'https://umangi.dev',
    jobTitle: 'Frontend Developer',
    email: 'umangip96@gmail.com',
    sameAs: [
      'https://github.com/umangi',      // ← update with real URLs
      'https://linkedin.com/in/umangi',
    ],
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Frontend Development'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Recommendations />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}