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
        borderColor: 'rgba(59, 130, 246, 1)',
        skills: [
          { name: 'Java', progress: 95 },
          { name: 'Spring Boot', progress: 90 },
          { name: 'Microservices', progress: 88 }
        ]
      },
      'Cloud': {
        color: 'rgba(16, 185, 129, 0.8)', // Green
        borderColor: 'rgba(16, 185, 129, 1)',
        skills: [
          { name: 'AWS/Azure', progress: 85 },
          { name: 'Serverless', progress: 75 }
        ]
      },
      'DevOps': {
        color: 'rgba(245, 158, 11, 0.8)', // Amber
        borderColor: 'rgba(245, 158, 11, 1)',
        skills: [
          { name: 'Docker/K8s', progress: 80 },
          { name: 'CI/CD', progress: 85 }
        ]
      },
      'Database': {
        color: 'rgba(139, 92, 246, 0.8)', // Purple
        borderColor: 'rgba(139, 92, 246, 1)',
        skills: [
          { name: 'PostgreSQL', progress: 90 },
          { name: 'MongoDB', progress: 80 }
        ]
      },
      'Frontend': {
        color: 'rgba(236, 72, 153, 0.8)', // Pink
        borderColor: 'rgba(236, 72, 153, 1)',
        skills: [
          { name: 'React', progress: 75 },
          { name: 'HTML/CSS', progress: 78 }
        ]
      }
    };
    
    const ctx = chartRef.current.getContext('2d');
    
    // Create datasets for bubble chart
    const datasets = [];
    
    // Use a more controlled positioning algorithm instead of random
    const totalSkills = Object.values(skillsByCategory).reduce(
      (count, category) => count + category.skills.length, 0
    );
    
    let skillIndex = 0;
    
    Object.keys(skillsByCategory).forEach(category => {
      const categoryData = skillsByCategory[category];
      
      // Create bubbles for each skill in this category
      categoryData.skills.forEach(skill => {
        // Calculate position based on index to ensure better distribution
        // This creates a grid-like pattern that ensures bubbles don't overlap too much
        const cols = Math.ceil(Math.sqrt(totalSkills));
        const row = Math.floor(skillIndex / cols);
        const col = skillIndex % cols;
        
        // Add some controlled randomness for natural look
        const jitterX = (Math.random() - 0.5) * 10;
        const jitterY = (Math.random() - 0.5) * 10;
        
        // Calculate x and y positions (20-80 range to keep away from edges)
        const x = 20 + (col * 60 / cols) + jitterX;
        const y = 20 + (row * 60 / cols) + jitterY;
        
        // Ensure radius is not too small
        const radius = Math.max(skill.progress / 4, 10);
        
        datasets.push({
          label: `${skill.name} (${category})`,
          data: [{
            x: x,
            y: y,
            r: radius, // Slightly larger bubbles
          }],
          backgroundColor: categoryData.color,
          borderColor: categoryData.borderColor,
          borderWidth: 1,
        });
        
        skillIndex++;
      });
    });
    
    chartInstance.current = new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: datasets
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            min: 0,
            max: 100,
            grid: {
              display: false
            },
            ticks: {
              display: false
            }
          },
          y: {
            min: 0,
            max: 100,
            grid: {
              display: false
            },
            ticks: {
              display: false
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.dataset.label || '';
                const radius = context.raw.r * 4; // Convert back to original percentage
                return `${label}: ${radius}% proficiency`;
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
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
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
