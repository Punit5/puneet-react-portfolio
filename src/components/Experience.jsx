import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      company: 'Everbridge Inc',
      role: 'Senior Software Developer',
      period: 'November 2022 - Present',
      color: '#00B388',
      letter: 'E',
      achievements: [
        'Developed and maintained the Analytics Back-end for generating user reports related to incident management using Java.',
        'Implemented front-end components using React to provide a seamless user experience for report generation and visualization.',
        'Utilized PostgreSQL and BigQuery (Google Cloud Platform) for efficient data storage and retrieval.',
        'Designed and executed unit tests to ensure the reliability and performance of the backend services.'
      ],
      tags: ['Java', 'React', 'PostgreSQL', 'BigQuery', 'GCP']
    },
    {
      company: 'Samsung',
      role: 'Senior Software Developer',
      period: 'August 2021 - November 2022',
      color: '#1428A0',
      letter: 'S',
      achievements: [
        'Successfully developed backend SMR (Security Management Release) spring boot application for providing security updates.',
        'Dockerized KSCB (Knox Samsung care for business) application and migrated from AWS EC2 to EKS.',
        'Successfully migrated KSCB application to support multi-cloud (AWS and Azure).',
        'Achieved Microsoft Azure Fundamentals Certification.'
      ],
      tags: ['Java', 'Spring Boot', 'Docker', 'AWS', 'Azure', 'EKS']
    },
    {
      company: 'Northland Properties',
      role: 'Product Lead - Alert Services',
      period: 'November 2017 - August 2021',
      color: '#FFA500',
      letter: 'N',
      achievements: [
        'Led development and maintenance of Mobius, the primary booking engine for hotel chains and restaurants.',
        'Successfully integrated Mobius with Maestro for 2-way integration with PMS.',
        'Created RESTFUL API for accessing current rates and inventories of various hotels.',
        'Streamlined deployment process using Ansible and AWS EC2 instances.'
      ],
      tags: ['Java', 'REST API', 'AWS', 'Ansible', 'Redis']
    },
    {
      company: 'QuoteMedia Ltd',
      role: 'Product Lead - Alert Services',
      period: 'December 2016 - November 2017',
      color: '#FF6B6B',
      letter: 'Q',
      achievements: [
        'Led development of Alert Services providing email and text alerts for stock prices.',
        'Enhanced and maintained Alert services using JAVA, PL/SQL, JSP and HTML.',
        'Improved response time for alerts and added robustness to the software.',
        'Migrated product to Spring Boot and added unit test cases.'
      ],
      tags: ['Java', 'Spring Boot', 'PL/SQL', 'JSP', 'HTML']
    }
  ];

  const expertise = [
    { name: 'Java Development', progress: 95, color: '#3B82F6' },
    { name: 'Spring Boot', progress: 90, color: '#10B981' },
    { name: 'Cloud (AWS/Azure)', progress: 85, color: '#F59E0B' },
    { name: 'Docker/Kubernetes', progress: 80, color: '#8B5CF6' },
    { name: 'Database Management', progress: 88, color: '#EF4444' }
  ];

  const stats = [
    { number: '8+', label: 'Years Experience', color: '#3B82F6' },
    { number: '15+', label: 'Projects Completed', color: '#10B981' },
    { number: '5+', label: 'Cloud Migrations', color: '#F59E0B' },
    { number: '4', label: 'Enterprise Companies', color: '#8B5CF6' }
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
        <div className="download-resume">
          <button className="download-button" onClick={() => window.open('/PuneetDimriResume.pdf', '_blank')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="download-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
}
