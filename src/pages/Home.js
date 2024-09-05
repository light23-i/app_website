import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const registrationLink = "https://forms.google.com/your-form-link";

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our Tech Education Platform</h1>
        <p>Learn from Industry Experts and Secure 100% Internship Opportunities</p>
        <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="btn">Register Now</a>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Expert Instructors</h2>
          <p>Learn from professionals with years of industry experience.</p>
        </div>
        <div className="feature">
          <h2>100% Internship Guarantee</h2>
          <p>Gain practical experience with our internship placement program.</p>
        </div>
        <div className="feature">
          <h2>Cutting-edge Curriculum</h2>
          <p>Stay ahead with our up-to-date and industry-relevant course content.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;