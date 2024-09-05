import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

function Courses() {
  const courses = [
    { id: 'full-stack', name: 'Full Stack Development' },
    { id: 'dsa', name: 'DSA' },
    { id: 'robotics-iot', name: 'Robotics and IoT' },
    { id: 'ai', name: 'AI' },
    { id: 'ml-data-science', name: 'Machine Learning and Data Science' },
    { id: 'data-engineering', name: 'Data Engineering' },
  ];

  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-item">
            <h2>{course.name}</h2>
            <Link to={`/courses/${course.id}`} className="btn">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;