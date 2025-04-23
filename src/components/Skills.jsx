import React from 'react';
import './Skills.css';

const Skills = () => {
  const backendSkills = [
    { name: 'Java', progress: 95 },
    { name: 'Spring Boot', progress: 90 },
    { name: 'Microservices', progress: 85 },
    { name: 'RESTful APIs', progress: 92 },
    { name: 'JUnit & Testing', progress: 88 }
  ];

  const keyAchievements = [
    'Designed and implemented scalable microservices architecture',
    'Reduced legacy system complexity by 40%',
    'Improved API response times by optimizing database queries'
  ];

  const skillCategories = [
    {
      title: 'Backend Stack',
      icon: '⚡️',
      items: [
        'Java (8, 11, 17)',
        'Spring Boot, Spring Cloud',
        'JUnit, Mockito, TestContainers',
        'Maven, Gradle'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: '☁️',
      items: [
        'AWS (EC2, S3, Lambda, ECS)',
        'Docker, Kubernetes',
        'Terraform, CloudFormation',
        'Jenkins, GitHub Actions'
      ]
    },
    {
      title: 'Databases',
      icon: '🔧',
      items: [
        'MySQL, PostgreSQL',
        'MongoDB, DynamoDB',
        'Redis, ElasticSearch',
        'Database Design & Optimization'
      ]
    },
    {
      title: 'Tools & Methodologies',
      icon: '⚙️',
      items: [
        'Git, GitHub, GitLab',
        'Agile/Scrum, Kanban',
        'JIRA, Confluence',
        'Domain-Driven Design'
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-content">
          <div className="skills-grid">
            <div className="skills-image">
              <h3>Technical Expertise</h3>
              <span className="photo-credit">Photo by Branko Stancevic</span>
            </div>
            <div className="skills-overview">
              <h3>Professional Overview</h3>
              <div className="skill-chart-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="chart-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <span>Skill visualization chart would appear here</span>
              </div>
              <p className="chart-caption">Visualization of key technical competencies across different domains</p>
            </div>
          </div>

          <div className="skills-content-grid">
            <div className="backend-skills">
              <div className="category-tabs">
                <button className="tab active">Backend</button>
                <button className="tab">Cloud</button>
                <button className="tab">DevOps</button>
                <button className="tab">Databases</button>
              </div>
              <h4>Backend Development</h4>
              <div className="skill-bars">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.progress}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="key-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {keyAchievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="skill-grid">
              {skillCategories.map((category) => (
                <div key={category.title} className="skill-category">
                  <div className="category-header">
                    <span className="category-icon">{category.icon}</span>
                    <h4>{category.title}</h4>
                  </div>
                  <ul className="category-items">
                    {category.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
