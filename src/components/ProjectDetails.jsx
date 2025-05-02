import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-details-overlay" onClick={onClose}>
      <div className="project-details-modal" onClick={e => e.stopPropagation()}>
        <div className="project-details-image">
          <img src={project.image} alt={project.title} />
          <div className="project-tags-overlay">
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
        </div>

        <div className="project-details-content">
          <h2>{project.title}</h2>

          <div className="project-overview">
            <h3>Project Overview</h3>
            <p>{project.description}</p>
          </div>

          <div className="technical-details">
            <h3>Technical Details</h3>
            <ul>
              {project.technicalDetails?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="key-outcomes">
            <h3>Key Outcomes</h3>
            <ul>
              {project.outcomes?.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>

          <div className="technologies-used">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {project.tags.map((tech, index) => (
                <span 
                  key={index} 
                  className="tech-tag"
                  data-type={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-footer">
            <div className="company-info">
              <div className="company-letter">
                {project.company[0]}
              </div>
              <span>{project.company}</span>
              <span className="period">{project.period}</span>
            </div>
            <button className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 