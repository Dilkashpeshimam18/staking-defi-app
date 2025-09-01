import React from "react";
import "./Reviews.css";

function Reviews() {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>
          What Our <span className="highlight">Users Are</span> Saying
        </h2>
        <p>
          Join thousands of satisfied users who are growing their crypto
          portfolios with DSTAKE. Hear what they have to say about their staking
          experience!
        </p>
      </div>

      <div className="testimonials-cards">
        {/* Card 1 */}
        <div className="testimonial-card">
          <div className="user-info">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John D"
              className="user-img"
            />
            <div>
              <h3>John D</h3>
              <div className="stars">★★★★★</div>
            </div>
          </div>
          <p className="testimonial-text">
            “I started staking with DSTAKE and have already earned 10% in rewards.
            It's so easy to use! I love how transparent and secure the platform
            is.”
          </p>
        </div>

        {/* Card 2 */}
        <div className="testimonial-card">
          <div className="user-info">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah L"
              className="user-img"
            />
            <div>
              <h3>Sarah L</h3>
              <div className="stars">★★★★★</div>
            </div>
          </div>
          <p className="testimonial-text">
            “I was hesitant about crypto staking at first, but DSTAKE made it so
            simple. The APY is fantastic, and I've been earning passive income
            every month!”
          </p>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="pagination-dots">
        <span></span>
        <span className="active"></span>
        <span></span>
      </div>
    </section>
  );
}

export default Reviews;
