import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>We are a leading tech education platform committed to providing high-quality courses and ensuring 100% internship opportunities for our students.</p>
      <div className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To empower the next generation of tech professionals with cutting-edge skills and real-world experience.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>To bridge the gap between academia and industry by providing practical, industry-relevant education and internship opportunities.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;