import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  const technologies = [
    'Java', 'Spring Boot', 'AWS', 'Microservices',
    'Docker', 'Kubernetes', 'CI/CD', 'REST APIs',
    'Cloud Migration'
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="header-left">
          <h1>Punit Dimri</h1>
          <span className="title">Senior Developer</span>
        </div>
        <div className="social-links">
          <a href="https://github.com/Punit5" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/punitdimrii" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </header>

      <div className="main-content">
        <nav className="navigation">
          <h2>Navigation</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact" className="active">Contact</a></li>
          </ul>
        </nav>

        <section className="technologies">
          <h2>Technologies</h2>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </section>

        <section className="approach">
          <h2>My Approach</h2>
          <div className="quote-container">
            <div className="accent-bar"></div>
            <blockquote>
              "I believe in creating robust, scalable solutions that solve real business problems. Technology should empower organizations to achieve their goals efficiently and reliably."
            </blockquote>
          </div>
          <p className="availability">Available for new opportunities</p>
        </section>
      </div>

      {children}

      <footer className="footer">
        <div className="footer-content">
          <span className="copyright">© 2024 Punit Dimri. All rights reserved.</span>
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
        <p className="footer-note">Background design inspired by minimalist design principles.</p>
      </footer>
    </div>
  );
};

export default Layout; 