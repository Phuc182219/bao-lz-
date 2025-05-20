import React, { useState } from 'react';
import './TestimonialsSection.css';

function TestimonialsSection() {
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [testimonials, setTestimonials] = useState([
    {
      rating: 5,
      quote: "I love generating image",
      name: "Emily R.",
      role: "Photographer",
      avatar: "E"
    },
    {
      rating: 5,
      quote: "I love how effortless it is! No need for complex software – just upload, choose a template, and done!",
      name: "Mark T.",
      role: "Content Creator",
      avatar: "M"
    },
    {
      rating: 5,
      quote: "As a designer, NEURAPIX helps me streamline my workflow. The results are professional, and the AI does all the hard work!",
      name: "Sophia L.",
      role: "Graphic Designer",
      avatar: "S"
    },
    {
      rating: 5,
      quote: "Editing has never been this easy! The free templates are a game-changer for my social media posts.",
      name: "David K.",
      role: "Influencer",
      avatar: "D"
    }
  ]);

  const handleRateClick = () => {
    setShowRatingForm(true);
  };

  const handleSubmitRating = (e) => {
    e.preventDefault();
    if (rating > 0 && comment.trim()) {
      // Create new testimonial
      const newTestimonial = {
        rating: rating,
        quote: comment,
        name: "You", // You could replace this with actual user name if available
        role: "User",
        avatar: "Y"
      };
      
      // Add new testimonial to the beginning of the list
      setTestimonials([newTestimonial, ...testimonials]);
      
      // Reset form
      setShowRatingForm(false);
      setRating(0);
      setComment('');
      alert('Thank you for your feedback!');
    } else {
      alert('Please provide both a rating and a comment.');
    }
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <div className="testimonials-text">
            <h2>Real Users, Real Results – See What People Love About NEURAPIX!</h2>
            <p className="intro">
              Join thousands of satisfied users who have transformed their photos with NEURAPIX. 
              From photographers to content creators, everyone loves the effortless editing experience, 
              stunning AI-powered enhancements, and time-saving templates. See what they're saying!
            </p>
          </div>
          <button className="btn btn-rate" onClick={handleRateClick}>Rate</button>
        </div>

        {showRatingForm && (
          <div className="rating-form-overlay">
            <div className="rating-form">
              <h3>Rate Your Experience</h3>
              <form onSubmit={handleSubmitRating}>
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${star <= rating ? 'active' : ''}`}
                      onClick={() => setRating(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <textarea
                  placeholder="Share your experience with NEURAPIX..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
                <div className="rating-form-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setShowRatingForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-user">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-user-info">
                  <p className="name">{testimonial.name}</p>
                  <p className="role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection; 