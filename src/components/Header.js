import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.svg'; // Make sure to add your logo file

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const courses = [
    { id: 'full-stack', name: 'Full Stack Development' },
    { id: 'dsa', name: 'DSA' },
    { id: 'robotics-iot', name: 'Robotics and IoT' },
    { id: 'ai', name: 'AI' },
    { id: 'ml-data-science', name: 'Machine Learning and Data Science' },
    { id: 'data-engineering', name: 'Data Engineering' },
  ];

  return (
    <header>
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src={logo} alt="AtDev Logo" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to="/courses">Courses</Link>
              {isDropdownOpen && (
                <ul className="dropdown">
                  {courses.map(course => (
                    <li key={course.id}>
                      <Link to={`/courses/${course.id}`}>{course.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;