import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animationTriggered) {
            setAnimationTriggered(true);
            const skillItems = entry.target.querySelectorAll('.skill-item');
            
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                
                // Get the actual percentage value
                const percentValue = item.querySelector('.skill-info p:last-child').textContent;
                const progressBar = item.querySelector('.skill-progress');
                
                // Set the width after a small delay for animation effect
                setTimeout(() => {
                  progressBar.style.width = percentValue;
                  progressBar.setAttribute('data-percentage', percentValue);
                  
                  // Add completed class after animation completes
                  setTimeout(() => {
                    progressBar.classList.add('completed');
                  }, 1200); // Match the animation duration
                }, 150);
              }, index * 120); // Stagger the animations a bit more
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [animationTriggered]);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript/TypeScript', level: 80 },
        { name: 'C/C++', level: 75 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Frameworks & Technologies',
      skills: [
        { name: 'Electron', level: 85 },
        { name: 'React Native', level: 80 },
        { name: 'Django/Flask', level: 80 },
        { name: 'Spring Boot', level: 75 },
        { name: 'Node.js', level: 70 }
      ]
    },
    {
      title: 'CS Fundamentals & Tools',
      skills: [
        { name: 'Data Structures', level: 90 },
        { name: 'Algorithms', level: 85 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Database Design', level: 80 },
        { name: 'System Architecture', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section skills-section">
      <div className="container skills-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content" ref={skillsRef}>
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={`category-${index}`}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div 
                    className="skill-item" 
                    key={`${category.title}-skill-${idx}`}
                    style={{ transitionDelay: `${idx * 0.05}s` }}
                  >
                    <div className="skill-info">
                      <p>{skill.name}</p>
                      <p>{skill.level}%</p>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: 0 }} // Start at 0 and animate to final value
                        data-percentage={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 