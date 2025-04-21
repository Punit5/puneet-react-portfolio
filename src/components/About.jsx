import './About.css';

export default function About() {
  const competencies = [
    { key: 'J', name: 'Java Development', color: '#60A5FA' },
    { key: 'S', name: 'Spring Boot', color: '#34D399' },
    { key: 'A', name: 'AWS Services', color: '#FBBF24' },
    { key: 'C', name: 'Cloud Migration', color: '#A78BFA' }
  ];

  const companies = [
    { key: 'S', name: 'Samsung', color: '#1428A0' },
    { key: 'E', name: 'Everbridge', color: '#00B388' },
    { key: 'N', name: 'Northland Properties', color: '#FFA500' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" 
              alt="Tech Innovation Visualization" 
              className="main-image"
            />
            <p className="image-credit">Photo by ThisisEngineering RAEng</p>
          </div>

          <div className="about-text">
            <h3>Senior Software Developer</h3>
            
            <p className="about-description">
              With over a decade of experience, I specialize in building enterprise-grade 
              applications using Java, Spring Boot, and AWS cloud services. I've helped 
              organizations streamline their operations through efficient, scalable, and 
              robust software solutions.
            </p>

            <div className="experience-section">
              <h4>I've had the privilege to work with:</h4>
              <div className="company-badges">
                {companies.map((company) => (
                  <div 
                    key={company.key} 
                    className="company-badge"
                    style={{
                      color: company.color,
                      backgroundColor: `${company.color}10`
                    }}
                    title={company.name}
                  >
                    {company.key}
                  </div>
                ))}
              </div>
            </div>

            <div className="competencies-section">
              <h4>Core competencies:</h4>
              <div className="competency-grid">
                {competencies.map((competency) => (
                  <div key={competency.key} className="competency-card">
                    <div className="competency-header">
                      <div className={`competency-icon ${competency.key.toLowerCase()}`}>
                        {competency.key}
                      </div>
                      <span className="competency-text">{competency.name}</span>
                    </div>
                    <div className="competency-progress">
                      <div 
                        className="progress-bar" 
                        style={{ backgroundColor: competency.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a href="#" className="resume-button">
              View Resume →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
