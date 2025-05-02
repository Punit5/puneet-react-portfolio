import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
      title: 'Generative AI',
      level: 'Professional',
      organization: 'Databricks',
      issueDate: 'Apr 2025',
      credentialUrl: '#',
      skills: [
        'Large Language Models and Transformers',
        'Prompt Engineering and Fine-tuning',
        'Enterprise AI Implementation'
      ]
    },
    {
      logo: '/images/logos/confluent.svg',
      title: 'Kafka Developer Skills',
      level: 'Professional',
      organization: 'Confluent',
      issueDate: 'Jul 2021',
      credentialUrl: '#',
      skills: [
        'Event Streaming Architecture',
        'Kafka Connect and Stream Processing',
        'Data Pipeline Development'
      ]
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      title: 'Azure Fundamentals',
      level: 'Professional',
      organization: 'Microsoft',
      issueDate: 'Jul 2021',
      credentialUrl: '#',
      skills: [
        'Cloud Computing Concepts',
        'Azure Services',
        'Security and Compliance'
      ]
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg',
      title: 'Scrum Master',
      level: 'Professional',
      organization: 'LinkedIn',
      issueDate: 'Mar 2021',
      credentialUrl: '#',
      skills: [
        'Agile Methodologies',
        'Sprint Planning',
        'Team Leadership'
      ]
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      title: 'IBM DB2 Certified',
      level: 'Professional',
      organization: 'IBM',
      issueDate: 'N/A',
      credentialUrl: '#',
      skills: [
        'Database Administration',
        'SQL Development',
        'Performance Tuning'
      ]
    }
  ];

  return (
    <div className="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <div key={index} className="certification-card">
            <div className="logo-container">
              <img 
                src={certification.logo} 
                alt={`${certification.organization} logo`} 
                className="company-logo"
              />
            </div>
            <div className="certification-content">
              <h3>{certification.title}</h3>
              <p className="subtitle">{certification.level} - {certification.organization}</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <ul className="skills-list">
                {certification.skills.map((skill, i) => (
                  <li key={i}>
                    <span className="checkmark">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="certification-footer">
                <span className="issue-date">Issued: {certification.issueDate}</span>
                <a 
                  href={certification.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-credential"
                >
                  View Credential
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;