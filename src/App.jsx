// =============================================================
// App.jsx — Root component
//
// Assembles all sections in order:
//   Navbar → Hero → Marquee → About → Experience →
//   Projects → Certifications → Contact → Footer
// =============================================================

import './styles/globals.css';

import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import Marquee         from './components/Marquee';
import About           from './components/About';
import Experience      from './components/Experience';
import Projects        from './components/Projects';
import Certifications  from './components/Certifications';
import Contact         from './components/Contact';
import Footer          from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Marquee />

        <About />

        <div className="divider" />

        <Experience />

        <div className="divider" />

        <Projects />

        <div className="divider" />

        <Certifications />

        <div className="divider" />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
