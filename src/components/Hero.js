import React, { useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const textRef = useRef(null);
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingText, setGreetingText] = useState('');
  const [isExiting, setIsExiting] = useState(false);

  // Handle initial animations and text setup
  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.add('text-animate');
    }

    // Add animation delay to children elements
    const animatedElements = textRef.current.querySelectorAll('.animate-item');
    animatedElements.forEach((element, index) => {
      element.style.animationDelay = `${0.3 + index * 0.15}s`;
    });

    // Show greeting after a short delay
    const greetingTimeout = setTimeout(() => {
      setShowGreeting(true);
      const text = 'Hello, how can I help you?';
      let index = 0;
      
      const typingInterval = setInterval(() => {
        if (index < text.length) {
          setGreetingText(text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
    }, 1000);

    // Auto-hide greeting after 5 seconds
    const hideTimeout = setTimeout(() => {
      handleDismissGreeting();
    }, 6000);

    return () => {
      clearTimeout(greetingTimeout);
      clearTimeout(hideTimeout);
    };
  }, []); // No dependencies needed for initial setup

  // Handle scroll events separately
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && showGreeting && !isExiting) {
        handleDismissGreeting();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showGreeting, isExiting]);

  // Handle smooth dismissal of greeting
  const handleDismissGreeting = () => {
    if (!isExiting) {
      setIsExiting(true);
      // Wait for exit animation to complete before hiding
      setTimeout(() => {
        setShowGreeting(false);
        setIsExiting(false);
      }, 300); // Match this with CSS animation duration
    }
  };

  return (
    <section id="home" className="hero hero-section">
      <div className="animated-bg">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>
      
      <div className="shooting-stars-container">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      
      <div className="twinkle-stars">
        <div className="twinkle-star"></div>
        <div className="twinkle-star"></div>
        <div className="twinkle-star"></div>
        <div className="twinkle-star"></div>
        <div className="twinkle-star"></div>
        <div className="twinkle-star"></div>
        <div className="twinkle-star"></div>
      </div>
      
      <div className="container hero-container">
        {showGreeting && (
          <div 
            className={`greeting-message wake-up ${isExiting ? 'exit' : ''}`}
            onClick={handleDismissGreeting}
          >
            {greetingText}
          </div>
        )}
        <div className="hero-content">
          <div className="hero-text" ref={textRef}>
            <h1 className="hero-title">
              <span className="name animate-item">John Guerra</span>
              <span className="title animate-item">Software Developer</span>
            </h1>
            <p className="hero-description animate-item">
              I'm a Computer Science graduate specializing in cross-platform development and AI innovation.
              I build softwares with Python, Java, PyQt, and Electron, while leveraging Large Language Models (LLMs)
              to create cutting-edge solutions for modern development challenges.
            </p>
            <div className="hero-buttons animate-item">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="profile-image-container">
            <div className="profile-image">
              <picture>
                <source srcSet="/picture/pfp.jpg" media="(min-width: 768px)" />
                <source srcSet="/picture/pfp.jpg" media="(min-width: 480px)" />
                <img src="/picture/pfp.jpg" alt="John Guerra" className="profile-img" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 