import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section about-section">
      <div className="container about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a recent Computer Science graduate with a passion for building 
              cross-platform applications. My journey in software development started during 
              my university coursework and has expanded through personal projects and internships.
            </p>
            <p>
              I enjoy solving complex problems and creating efficient, user-friendly 
              applications. My diverse skill set allows me to work on various platforms - 
              from mobile apps to desktop software and backend systems.
            </p>
            <p>
              Here are some technologies I've been working with:
            </p>
            <ul className="skills-list">
              <li>Python (Django, Flask)</li>
              <li>Java (Spring, Android)</li>
              <li>JavaScript/TypeScript</li>
              <li>React Native</li>
              <li>Electron</li>
              <li>SQL/NoSQL Databases</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 