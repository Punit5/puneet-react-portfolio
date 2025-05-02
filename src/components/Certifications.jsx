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
      credentialUrl: 'https://credentials.databricks.com/0cd9f836-71fe-4670-a40f-2f9a79988efa',
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
      credentialUrl: 'https://www.credential.net/profile/puneetpatel/wallet',
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
      credentialUrl: 'https://learn.microsoft.com/en-us/users/puneetpatel-2435/credentials',
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
      credentialUrl: 'https://www.linkedin.com/learning/certificates/5836e23e3780aeeda61f6a303b24624f4e2fc26cb191f95f6f2c528034113cc3?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BkI0%2FiJm4TwaUOxcT1gEHRA%3D%3D',
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
      credentialUrl: 'https://www.credly.com/badges/12345',
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
      <p className="section-description">Continuous learning is essential in the rapidly evolving tech landscape. Below are my professional certifications that validate my expertise in various technologies.</p>
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
                  View Credential →
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