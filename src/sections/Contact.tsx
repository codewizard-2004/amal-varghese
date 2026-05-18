import React from 'react';
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Talk to me! 👋 or checkout my socials</h2>
        <p>
          Send me a note and I will reply within a business day — no sales script, no follow-up drip, just a real conversation.
        </p>
        <div className="social-links">
          <a href="https://github.com/codewizard-2004" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/amal-varghese-670225291" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://www.instagram.com/4mal_varghese/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <SpotlightCard className="contact-card" spotlightColor="rgba(255, 255, 255, 0.08)">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" placeholder="Enter your first name*" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" placeholder="Enter your last name*" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <div className="input-with-icon">
                <input type="email" id="email" placeholder="Enter email address*" required />
                <span className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Enter your message" rows={4} required></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">Send message</button>
            </div>
          </form>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default Contact;
