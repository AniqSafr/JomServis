import React, { useState } from 'react';
import './Inquiry.css';
import Navbar from '../HomePage/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Inquiry() {
  return (
    <div className="Inquiry">
      <Navbar />
      <FormSection />
      <ContactSection />
      <SocialSection />
    </div>
  );
}

function FormSection() {

    const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (!termsAccepted) {
      alert('Please accept the terms and conditions before submitting.');
      return;
    }
    // Add your logic to handle form submission here
    // For example, you can collect form data and send it to a server

    // Show the popup
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section>
      <div className='inquiry-container'>
        <h1>Let's Get Started</h1>
        <p>Tell us what we can do for you! Fill in the form below and our team will get in touch with you.</p>
        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <div className="form-desc">
            <textarea className="form-control" placeholder="Issue Description" rows="12"></textarea>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Car Maker" />
            <input type="text" list="issue" placeholder="Select an issue" />
            <datalist id="issue">
              <option value="issue1">Issue 1</option>
              <option value="issue2">Issue 2</option>
              <option value="issue3">Issue 3</option>
            </datalist>
          </div>
          <div className="tnc">
            <label>
                <input
                name='box'
                type='checkbox'
                className="input-checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                />I have read and agreed to the Terms and Conditions and PDPA Notice.
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Submission Complete!</p>
              <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
      </div>
        )}
        </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section>
      <div className='contact-container'>
        <h1>Talk to us</h1>
        <p>Customer Support Hotline:</p>
        <button type="submit">012-3456789</button>
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section>
      <div className='social-container'>
        <h1>Find us</h1>
        <p>Follow our social media for more updates!</p>
        <div className='social-icons'>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inquiry;
