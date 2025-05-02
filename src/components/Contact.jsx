import React, { useState } from 'react';
import './Contact.css';
import PrivacyPolicy from './PrivacyPolicy';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacyAccepted: false
  });
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear any previous submission status when user makes changes
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    
    // Create email body with all the information
    const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:punit.dimri@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      privacyAccepted: false
    });
  };

  const handlePrivacyPolicyClick = (e) => {
    e.preventDefault();
    setShowPrivacyPolicy(true);
  };

  const contactInfo = [
    {
      icon: '✉️',
      title: 'Email Address',
      value: 'punit.dimri@gmail.com',
      link: 'mailto:punit.dimri@gmail.com'
    },
    {
      icon: '🔗',
      title: 'LinkedIn',
      value: 'linkedin.com/in/punitdimrii',
      link: 'https://www.linkedin.com/in/punitdimrii'
    },
    {
      icon: '😺',
      title: 'GitHub',
      value: 'github.com/Punit5',
      link: 'https://github.com/Punit5'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Vancouver, BC, Canada',
      link: null
    },
    {
      icon: '⏰',
      title: 'Availability',
      value: 'Open to remote opportunities and contract work',
      link: null
    }
  ];

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p className="contact-description">
        Ready to collaborate on your next project? Feel free to reach out, and I'll get back to you
        promptly to discuss how I can help bring your vision to life.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <div className="contact-links">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <span>{info.icon}</span>
                </div>
                <div className="contact-detail">
                  <h4>{info.title}</h4>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
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
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
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
                placeholder="Your message here..."
                required
                rows={6}
              />
            </div>
            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="privacy"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                required
              />
              <label htmlFor="privacy">
                I agree to the <a href="#" onClick={handlePrivacyPolicyClick}>privacy policy</a>
              </label>
            </div>
            {submitStatus.type && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
      <PrivacyPolicy isOpen={showPrivacyPolicy} onClose={() => setShowPrivacyPolicy(false)} />
    </section>
  );
};

export default Contact; 