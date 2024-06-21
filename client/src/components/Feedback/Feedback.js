import React, { useState } from 'react';
import './Feedback.css';
import Navbar from '../HomePage/Navbar';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function Feedback() {
  return (
    <div className="Feedback">
      <Navbar />
      <FeedbackSection />
    </div>
  );
}

function FeedbackSection() {
  const [feedback, setFeedback] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [rating, setRating] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const bookingId = new URLSearchParams(location.search).get('bookingId'); // Get bookingId from query params

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setFeedback(option); // Auto-write the selected option in the feedback text area
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post('http://localhost:5000/submitFeedback', {
        bookingId,
        feedbackText: feedback,
        rating,
      }, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      console.log('Response:', response.data); // Log the response

      if (response.data.status === 'ok') {
        alert('Thank you for your feedback!');
        navigate('/'); // Redirect after successful submission
      } else {
        alert('Error submitting feedback: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error.response ? error.response.data : error.message);
      alert('Error submitting feedback: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <section className="feedback-section">
      <div className="feedback-container">
        <h4>Feel free to drop us your feedback.</h4>
        <div className="form-suggest">
          <label>Rate your experience</label>
          <select value={rating} onChange={handleRatingChange} className="form-control2">
            <option value="">Select Rating</option>
            <option value="1">1 - Very Bad</option>
            <option value="2">2 - Bad</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <label>What Could Be Better?</label>
        <div className="options-container">
          <div className="option" onClick={() => handleOptionClick('Navigation Experience')}>
            <span>Navigation Experience</span>
          </div>
          <div className="option" onClick={() => handleOptionClick('Overall Experience')}>
            <span>Overall Experience</span>
          </div>
          <div className="option" onClick={() => handleOptionClick('Website Look & Feel')}>
            <span>Website Look & Feel</span>
          </div>
          <div className="option" onClick={() => handleOptionClick('Information Availability')}>
            <span>Information Availability</span>
          </div>
        </div>
        <div className="form-suggest">
          <label>Tell us about your experience</label>
          <textarea
            className="form-control2"
            placeholder="Comments or suggestions..."
            rows="5"
            value={feedback}
            onChange={handleFeedbackChange}
          ></textarea>
        </div>
        <button type="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </section>
  );
}

export default Feedback;
