import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      company: 'Samsung Electronics',
      role: 'Senior Software Developer',
      period: '2020 - Present',
      color: '#3B82F6',
      letter: 'S',
      achievements: [
        'Led the development of a microservices architecture using Spring Boot, enhancing scalability and maintainability.',
        'Orchestrated AWS cloud migration, resulting in 35% cost reduction and improved system reliability.',
        'Implemented CI/CD pipelines with Jenkins and Docker, reducing deployment time by 60%.'
      ],
      tags: ['Java', 'Spring Boot', 'AWS', 'Microservices']
    },
    {
      company: 'Everbridge',
      role: 'Software Developer',
      period: '2016 - 2019',
      color: '#10B981',
      letter: 'E',
      achievements: [
        'Developed critical communication systems using Java and Spring Framework for emergency response scenarios.',
        'Created RESTful APIs for seamless integration with third-party emergency service providers.',
        'Optimized database queries that improved message throughput by 40% during critical incidents.'
      ],
      tags: ['Java', 'Spring', 'REST APIs', 'MySQL']
    },
    {
      company: 'Northland Properties',
      role: 'Junior Developer',
      period: '2013 - 2016',
      color: '#FFA500',
      letter: 'N',
      achievements: [
        'Built internal tools for property management and hotel reservations, streamlining operations.',
        'Maintained and enhanced legacy Java applications, increasing system uptime by 25%.',
        'Participated in Agile development processes, helping the team transition from waterfall methodology.'
      ],
      tags: ['Java', 'JSP', 'Servlets', 'SQL']
    }
  ];

  const expertise = [
    { name: 'Java Development', progress: 95, color: '#3B82F6' },  // Blue
    { name: 'Spring Boot', progress: 90, color: '#10B981' },       // Green
    { name: 'AWS Cloud Services', progress: 85, color: '#F59E0B' }, // Yellow/Orange
    { name: 'Microservices Architecture', progress: 88, color: '#8B5CF6' }, // Purple
    { name: 'DevOps & CI/CD', progress: 82, color: '#EF4444' }     // Red
  ];

  const stats = [
    { number: '10+', label: 'Years Experience', color: '#3B82F6' },  // Blue
    { number: '20+', label: 'Projects Completed', color: '#10B981' }, // Green
    { number: '15+', label: 'Cloud Migrations', color: '#F59E0B' },   // Orange
    { number: '3', label: 'Enterprise Companies', color: '#8B5CF6' }  // Purple
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-content">
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <div className="timeline-item" key={exp.company}>
                <div
                  className="company-icon"
                  style={{ color: exp.color }}
                >
                  {exp.letter}
                </div>
                <div className="timeline-content">
                  <h3>{exp.company}</h3>
                  <div className="role-period">
                    <span className="role" style={{ color: exp.color }}>{exp.role}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <ul className="achievements">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} style={{
                        '--checkmark-url': `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="${exp.color.replace('#', '%23')}15"/><path stroke="${exp.color.replace('#', '%23')}" stroke-width="2" d="M8 12l3 3l6-6"/></svg>')`
                      }}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="tech-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-sidebar">
            <div className="professional-journey">
              <img 
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" 
                alt="Professional Journey" 
                className="journey-image"
              />
              <div className="journey-text">
                <h3>Professional Journey</h3>
                <p>A decade of building robust, scalable backend systems</p>
              </div>
            </div>

            <div className="technical-expertise">
              <h3>Technical Expertise</h3>
              {expertise.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.progress}%`,
                        backgroundColor: skill.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="experience-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <span className="stat-number" style={{ color: stat.color }}>{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
