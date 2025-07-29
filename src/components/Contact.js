import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, you would handle the form submission here
    // For demo purposes, we'll just simulate a successful submission
    console.log('Form submitted:', formData);
    
    // Reset form and show success message
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setFormSubmitted(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact section contact-section">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3 className="info-title">Let's Connect</h3>
              <p>I'm currently looking for new opportunities to apply my Computer Science knowledge and development skills. Whether you have a question about my projects or want to discuss potential collaboration, feel free to reach out!</p>
            </div>
            <div className="contact-item">
              <h3 className="info-title">Contact Information</h3>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">jmguerra015@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Dasmariñas, Cavite, Philippines</span>
              </div>
            </div>
            <div className="contact-item">
              <h3 className="info-title">Social Media</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/john-michael-guerra-228353341/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                <a href="https://github.com/Emcoding15" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="success-message">
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 