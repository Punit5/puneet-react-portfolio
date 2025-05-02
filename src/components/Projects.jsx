import React, { useState } from 'react';
import './Projects.css';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Analytics Backend System",
      description: "Developed and maintained the Analytics Back-end for generating user reports related to incident management, utilizing Java and React with PostgreSQL and BigQuery for efficient data handling.",
      company: "Everbridge",
      period: "2022-2023",
      tags: ["Java", "React", "PostgreSQL", "BigQuery", "GCP"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      technicalDetails: [
        "Implemented RESTful APIs using Java and Spring Boot",
        "Designed and optimized PostgreSQL database schema",
        "Integrated with Google BigQuery for large-scale data analytics",
        "Built responsive React components for data visualization"
      ],
      outcomes: [
        "Reduced report generation time by 60%",
        "Improved data processing efficiency by 45%",
        "Enhanced user experience with real-time analytics",
        "Implemented automated testing with 90% coverage"
      ]
    },
    {
      title: "Security Management Release System",
      description: "Successfully developed backend SMR application for providing security updates, with multi-cloud support across AWS and Azure platforms.",
      company: "Samsung",
      period: "2021-2022",
      tags: ["Java", "Spring Boot", "Docker", "AWS", "Azure"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
      technicalDetails: [
        "Developed microservices architecture using Spring Boot",
        "Implemented multi-cloud deployment strategy",
        "Containerized applications using Docker",
        "Set up CI/CD pipelines for automated deployment"
      ],
      outcomes: [
        "Achieved 99.9% system availability",
        "Reduced deployment time by 70%",
        "Successfully migrated to multi-cloud infrastructure",
        "Implemented automated security patches"
      ]
    },
    {
      title: "Hotel Booking Engine",
      description: "Led development of Mobius, the primary booking engine for hotel chains and restaurants, integrating with third-party PMS systems and implementing RESTful APIs.",
      company: "Northland Properties",
      period: "2017-2021",
      tags: ["Java", "REST API", "AWS", "Ansible", "Redis"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
      technicalDetails: [
        "Designed and implemented RESTful APIs",
        "Integrated with multiple third-party PMS systems",
        "Implemented caching using Redis",
        "Automated deployment using Ansible"
      ],
      outcomes: [
        "Increased booking efficiency by 40%",
        "Reduced system response time by 50%",
        "Successfully integrated with 5 major PMS systems",
        "Improved system scalability and reliability"
      ]
    },
    {
      title: "Financial Alert System",
      description: "Led development of Alert Services providing real-time email and text alerts for stock prices, improving response time and system robustness.",
      company: "QuoteMedia",
      period: "2016-2017",
      tags: ["Java", "Spring Boot", "PL/SQL", "JSP"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070",
      technicalDetails: [
        "Developed real-time alert processing system",
        "Optimized database queries using PL/SQL",
        "Implemented email and SMS notification system",
        "Created monitoring and reporting dashboard"
      ],
      outcomes: [
        "Reduced alert processing time by 65%",
        "Increased system reliability to 99.9%",
        "Handled over 1M daily alert notifications",
        "Improved customer satisfaction by 40%"
      ]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="project-tag"
                      data-type={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.description}</p>

                <div className="project-footer">
                  <div className="company-info">
                    <div className="company-letter">
                      {project.company[0]}
                    </div>
                    <span>{project.company}</span>
                    <span className="period">{project.period}</span>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedProject(project);
                    }} 
                    className="view-details"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectDetails 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects; 