import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      {/* Main content area */}
      <main id="main-content" className="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-left">© 2024 Punit Dimri. All rights reserved.</div>
          <div className="footer-right">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;
