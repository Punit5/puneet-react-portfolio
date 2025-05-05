import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SkillsChart = ({ skills }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    // Group skills by category with distinct colors
    const skillsByCategory = {
      'Backend': {
        color: 'rgba(59, 130, 246, 0.8)', // Blue
        skills: [
          { name: 'Java', progress: 95 },
          { name: 'Spring Boot', progress: 90 },
          { name: 'Microservices', progress: 88 }
        ]
      },
      'Cloud': {
        color: 'rgba(16, 185, 129, 0.8)', // Green
        skills: [
          { name: 'AWS/Azure', progress: 85 },
          { name: 'Serverless', progress: 75 }
        ]
      },
      'DevOps': {
        color: 'rgba(245, 158, 11, 0.8)', // Amber
        skills: [
          { name: 'Docker/K8s', progress: 80 },
          { name: 'CI/CD', progress: 85 }
        ]
      },
      'Database': {
        color: 'rgba(139, 92, 246, 0.8)', // Purple
        skills: [
          { name: 'PostgreSQL', progress: 90 },
          { name: 'MongoDB', progress: 80 }
        ]
      },
      'Frontend': {
        color: 'rgba(236, 72, 153, 0.8)', // Pink
        skills: [
          { name: 'React', progress: 75 },
          { name: 'HTML/CSS', progress: 78 }
        ]
      }
    };
    
    const ctx = chartRef.current.getContext('2d');
    
    // Flatten all skills into a single array for labels
    const allSkills = [];
    Object.keys(skillsByCategory).forEach(category => {
      skillsByCategory[category].skills.forEach(skill => {
        allSkills.push({
          name: skill.name,
          category: category
        });
      });
    });
    
    // Create datasets - one for each category
    const datasets = Object.keys(skillsByCategory).map(category => {
      const categoryData = skillsByCategory[category];
      
      // Create an array with null values for all skills
      const data = allSkills.map(skill => {
        // Only include value if this skill belongs to this category
        if (skill.category === category) {
          // Find the skill in this category
          const matchingSkill = categoryData.skills.find(s => s.name === skill.name);
          return matchingSkill ? matchingSkill.progress : null;
        }
        return null;
      });
      
      return {
        label: category,
        data: data,
        backgroundColor: categoryData.color,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.8,
        categoryPercentage: 0.8
      };
    });
    
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: allSkills.map(skill => skill.name),
        datasets: datasets
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.dataset.label || '';
                const value = context.raw;
                if (value !== null) {
                  return `${label}: ${value}%`;
                }
                return '';
              }
            }
          },
          legend: {
            position: 'top',
            labels: {
              boxWidth: 15,
              padding: 10,
              font: {
                size: 11
              }
            }
          },
          title: {
            display: true,
            text: 'Technical Competencies by Category',
            font: {
              size: 14
            },
            padding: {
              top: 10,
              bottom: 15
            }
          }
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'Proficiency (%)',
              font: {
                size: 12
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          },
          y: {
            stacked: true,
            grid: {
              display: false
            }
          }
        },
        layout: {
          padding: {
            left: 10,
            right: 20,
            top: 0,
            bottom: 10
          }
        }
      }
    });
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [skills]);

  return (
    <div className="skills-chart">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default SkillsChart;
