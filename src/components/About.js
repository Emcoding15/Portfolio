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
            
            <div className="skills-compact">
              <div className="skill-group">
                <div className="skill-header">
                  <i className="fas fa-code"></i>
                  <h3>Programming</h3>
                </div>
                <p>Python, C#, Java, JavaScript, React, HTML/CSS, Dart, SQL</p>
              </div>
              
              <div className="skill-group">
                <div className="skill-header">
                  <i className="fas fa-database"></i>
                  <h3>Databases</h3>
                </div>
                <p>Firebase, MySQL, SQL/NoSQL</p>
              </div>
              
              <div className="skill-group">
                <div className="skill-header">
                  <i className="fas fa-layer-group"></i>
                  <h3>Frameworks</h3>
                </div>
                <p>React.js, Flutter, Unity, Electron, PyQT</p>
              </div>
              
              <div className="skill-group">
                <div className="skill-header">
                  <i className="fas fa-tools"></i>
                  <h3>Dev Tools</h3>
                </div>
                <p>Git, GitHub, GitLab, VSC, Vercel, Figma, Google AI Studio</p>
              </div>
              
              <div className="skill-group">
                <div className="skill-header">
                  <i className="fas fa-laptop-code"></i>
                  <h3>Specialties</h3>
                </div>
                <p>Software Development, Web Development, Mobile Apps, AI Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 