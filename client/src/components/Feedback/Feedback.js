import React, { useState } from 'react';
import './Feedback.css';
import Navbar from '../HomePage/Navbar';

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
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleStarClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleStarHover = (ratingValue) => {
    setHoverRating(ratingValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Selected Option:', selectedOption);
    console.log('Feedback:', feedback);
    alert('Thank you for your feedback!');
  };

  return (
    <section className="feedback-section">
      <div className="feedback-container">
        <h4>Feel free to drop us your feedback.</h4>
        <div className="form-suggest">
          <label>Rate your experience</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                starId={star}
                rating={hoverRating || rating}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={() => handleStarHover(0)}
                onClick={() => handleStarClick(star)}
              />
            ))}
          </div>
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </section>
  );
}

const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
    let styleClass = 'star-rating-blank';
    if (rating >= starId) {
      styleClass = 'star-rating-filled';
    }
    return (
      <div
        className={`star ${styleClass}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        &#9733;
      </div>
    );
  };

export default Feedback;
