import React, { useState } from 'react';
import './Inquiry.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import logo from "../HomePage/assets/images/logo-removebg-preview.png";


function Inquiry() {
  return (
    <div className="Inquiry">
      <FormSection />
      <ContactSection />
      <SocialSection />
    </div>
  );
}

function FormSection() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [carMaker, setCarMaker] = useState('');
  const [issues, setIssues] = useState('');
  const [description, setDescription] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!termsAccepted) {
      alert('You must accept the terms and conditions');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/inquiries', {
        name,
        phoneNumber,
        email,
        carMaker,
        issues,
        description,
      });

      if (response.data.status === 'ok') {
        setShowPopup(true);
        resetFormFields();  // Reset form fields after successful submission
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      alert('An error occurred while submitting the form');
    }
  };

  const resetFormFields = () => {
    setName('');
    setPhoneNumber('');
    setEmail('');
    setCarMaker('');
    setIssues('');
    setDescription('');
    setTermsAccepted(false);
  };

  return (
    <section className='background-logo' style={{ backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className='inquiry-container'>
        <h1>Let's Get Started</h1>
        <p>Tell us what we can do for you! Fill in the form below and our team will get in touch with you.</p>
        <form onSubmit={handleSubmit} >
          <div className="form-desc" >
            <textarea
              className="form-control"
              placeholder="Issue Description"
              rows="12"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Car Maker"
              value={carMaker}
              onChange={(e) => setCarMaker(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              list="issue"
              placeholder="Write an issue"
              value={issues}
              onChange={(e) => setIssues(e.target.value)}
            />
          </div>
          <div className="tnc">
            <label>
              <input
                name='box'
                className="form-control"
                type='checkbox'
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              I have read and agreed to the Terms and Conditions and PDPA Notice.
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
            <FontAwesomeIcon icon={faInstagram} size="3x" className='app-icon' />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="3x" className='app-icon' />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="3x" className='app-icon' />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Inquiry;
