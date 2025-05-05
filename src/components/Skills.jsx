import React, { useState } from 'react';
import './Skills.css';
import SkillsChart from './SkillsChart';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Backend');

  const backendSkills = [
    { name: 'Java', progress: 95 },
    { name: 'Spring Boot', progress: 90 },
    { name: 'AWS/Azure', progress: 85 },
    { name: 'Docker/K8s', progress: 80 },
    { name: 'Database Management', progress: 88 }
  ];

  const cloudSkills = [
    { name: 'AWS Services', progress: 85 },
    { name: 'Azure Cloud', progress: 80 },
    { name: 'Cloud Migration', progress: 85 },
    { name: 'Serverless', progress: 75 },
    { name: 'Multi-Cloud', progress: 82 }
  ];

  const devOpsSkills = [
    { name: 'Docker', progress: 88 },
    { name: 'Kubernetes', progress: 80 },
    { name: 'CI/CD', progress: 85 },
    { name: 'Ansible', progress: 82 },
    { name: 'Git/SVN', progress: 90 }
  ];

  const databaseSkills = [
    { name: 'PostgreSQL', progress: 90 },
    { name: 'MySQL', progress: 88 },
    { name: 'Oracle', progress: 85 },
    { name: 'MongoDB', progress: 80 },
    { name: 'BigQuery', progress: 82 }
  ];

  const getActiveSkills = () => {
    switch(activeTab) {
      case 'Backend':
        return backendSkills;
      case 'Cloud':
        return cloudSkills;
      case 'DevOps':
        return devOpsSkills;
      case 'Databases':
        return databaseSkills;
      default:
        return backendSkills;
    }
  };

  // Create a combined skills array for the chart
  const chartSkills = [
    { name: 'Java', progress: 95 },
    { name: 'Spring Boot', progress: 90 },
    { name: 'AWS/Azure', progress: 85 },
    { name: 'Docker/K8s', progress: 80 },
    { name: 'PostgreSQL', progress: 90 },
    { name: 'CI/CD', progress: 85 },
    { name: 'Microservices', progress: 88 },
    { name: 'React', progress: 75 }
  ];

  const keyAchievements = [
    'Successfully migrated applications to multi-cloud (AWS and Azure)',
    'Dockerized applications and moved from EC2 to EKS',
    'Developed and maintained Analytics Back-end for incident management',
    'Created RESTful APIs for hotel booking and inventory management'
  ];

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: '⚡️',
      items: [
        'Java, Spring Boot, Spring MVC',
        'JavaScript, React',
        'Python, Shell Scripting',
        'HTML/CSS'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: '☁️',
      items: [
        'AWS (EC2, EKS, S3)',
        'Azure Cloud Services',
        'Docker, Kubernetes',
        'Ansible'
      ]
    },
    {
      title: 'Databases',
      icon: '🔧',
      items: [
        'PostgreSQL, MySQL',
        'Oracle, SQL Server',
        'MongoDB',
        'BigQuery'
      ]
    },
    {
      title: 'Tools & Methodologies',
      icon: '⚙️',
      items: [
        'Git, SVN',
        'Maven, Postman',
        'Agile/Scrum',
        'OOP Design Patterns'
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
              <div className="skill-chart">
                <SkillsChart skills={chartSkills} />
              </div>
              <p className="chart-caption">Visualization of key technical competencies across different domains</p>
            </div>
          </div>

          <div className="skills-content-grid">
            <div className="backend-skills">
              <div className="category-tabs">
                {['Backend', 'Cloud', 'DevOps', 'Databases'].map(tab => (
                  <button 
                    key={tab}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <h4>{activeTab} Development</h4>
              <div className="skill-bars">
                {getActiveSkills().map((skill) => (
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
