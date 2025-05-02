import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="privacy-policy-overlay">
      <div className="privacy-policy-modal">
        <div className="privacy-policy-header">
          <h2>Privacy Policy</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="privacy-policy-content">
          <section>
            <h3>Information Collection and Use</h3>
            <p>
              When you use the contact form on this website, I collect personal information that
              you voluntarily provide, such as your name and email address. This information is
              used solely for the purpose of responding to your inquiries and will not be shared
              with third parties without your consent.
            </p>
          </section>

          <section>
            <h3>Data Storage</h3>
            <p>
              Your information is securely stored and protected. I retain your contact information
              only for as long as necessary to respond to your inquiry or as required by law.
            </p>
          </section>

          <section>
            <h3>Your Rights</h3>
            <p>
              You have the right to request access to, correction of, or deletion of your personal
              information at any time. To exercise these rights, please contact me directly.
            </p>
          </section>

          <section>
            <h3>Cookies</h3>
            <p>
              This website uses cookies to enhance your browsing experience. You can disable
              cookies in your browser settings if you prefer.
            </p>
          </section>

          <section>
            <h3>Updates to This Policy</h3>
            <p>
              This privacy policy may be updated from time to time. Any changes will be posted
              on this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 