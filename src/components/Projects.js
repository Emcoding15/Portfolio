import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Speaker Audio Transcriber',
      description: 'A powerful desktop application for transcribing audio files with multiple speakers, supporting both English and Tagalog languages. Features include multi-speaker detection, automatic translation, meeting minutes generation, and a user-friendly GUI interface.',
      technologies: ['Python', 'HuggingFace', 'Whisper', 'Ollama', 'PyAnnote', 'SpeechBrain'],
      image: 'audio-transcriber.jpg',
      liveLink: 'https://example.com/audiotranscriber',
      codeLink: 'https://github.com/yourusername/AudioTranscriber'
    },
    {
      title: 'ElsAR - Augmented Reality Educational App',
      description: 'An innovative AR application for Earth and Life Science education, featuring interactive 3D models, scannable flashcards, and real-time progress tracking. Implemented with Unity3D and Vuforia for AR functionality, custom 3D models created in Blender, and Firebase for backend services.',
      technologies: ['Unity3D', 'C#', 'Vuforia AR', 'Blender', 'Firebase', 'Figma'],
      image: 'elsar-project.jpg',
      liveLink: 'https://example.com/elsar',
      codeLink: 'https://github.com/yourusername/elsar'
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'A Python web application for data visualization and analysis with machine learning capabilities.',
      technologies: ['Python', 'Django', 'Pandas', 'Scikit-learn', 'Chart.js'],
      image: 'project3.jpg',
      liveLink: 'https://example.com/dashboard',
      codeLink: 'https://github.com/yourusername/dashboard'
    }
  ];

  return (
    <section id="projects" className="projects section projects-section">
      <div className="container projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span className="tech-tag" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="more-projects">
          <a href="/more-projects" className="btn">View More Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 