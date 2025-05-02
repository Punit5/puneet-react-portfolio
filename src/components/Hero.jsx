import { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = [
    "Senior Software Developer", 
    "Java Expert", 
    "Cloud Migration Specialist", 
    "Full Stack Developer"
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000; // Time to wait before deleting/typing next phrase

  useEffect(() => {
    const typeText = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        
        if (typedText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        
        if (typedText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => 
            prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
          );
        }
      }
    };

    const timer = setTimeout(
      typeText,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex, phrases]);

  return (
    <section className="hero" id="home">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Frankfurt Skyline"
          className="hero-image"
          loading="eager"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text-container">
          {/* Typing Animation */}
          <p className="hero-subtitle">
            {typedText}<span className="cursor">|</span>
          </p>

          {/* Main Heading */}
          <h1 className="hero-title">
            Puneet Dimri
            <br />
            <span className="highlight">Master of Software Systems</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Senior Software Developer with expertise in backend development, cloud migration, and application modernization. 
            Proficient in Java, Spring Boot, AWS, and full-stack development. Transforming complex business requirements 
            into reliable, scalable systems.
          </p>

          {/* CTA Buttons */}
          <div className="cta-container">
            <a 
              href="#projects" 
              className="cta-button primary"
            >
              View My Work
            </a>
            <a 
              href="mailto:Punit.dimri@gmail.com" 
              className="cta-button secondary"
            >
              Contact Me
            </a>
          </div>

          {/* Tech stack icons */}
          <div className="tech-stack">
            <p className="tech-stack-title">Technologies I work with:</p>
            <div className="tech-icons">
              {[
                { letter: 'J', text: 'Java' },
                { letter: 'S', text: 'Spring' },
                { letter: 'A', text: 'AWS' },
                { letter: 'R', text: 'React' },
                { letter: 'D', text: 'Docker' }
              ].map((tech, index) => (
                <div key={index} className="tech-icon" aria-label={tech.text}>
                  <div className="tech-icon-circle">
                    <span className="tech-icon-letter">{tech.letter}</span>
                  </div>
                  <span className="tech-icon-text">{tech.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}
