import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';

function CourseDetail() {
  const { id } = useParams();

  const courses = {
    'full-stack': {
      name: 'Full Stack Development',
      description: 'Learn to build complete web applications from front-end to back-end.',
      duration: '24 weeks',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']
    },
    'dsa': {
      name: 'Data Structures and Algorithms',
      description: 'Master the fundamental concepts of DSA to excel in coding interviews.',
      duration: '16 weeks',
      skills: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming']
    },
    'robotics-iot': {
      name: 'Robotics and IoT',
      description: 'Explore the world of robotics and Internet of Things (IoT) technologies.',
      duration: '20 weeks',
      skills: ['Arduino', 'Raspberry Pi', 'Sensors', 'Actuators', 'IoT Protocols']
    },
    'ai': {
      name: 'Artificial Intelligence',
      description: 'Dive into the fascinating field of AI and its applications.',
      duration: '22 weeks',
      skills: ['Machine Learning', 'Neural Networks', 'Natural Language Processing', 'Computer Vision']
    },
    'ml-data-science': {
      name: 'Machine Learning and Data Science',
      description: 'Learn to analyze data and build predictive models using ML techniques.',
      duration: '26 weeks',
      skills: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Data Visualization']
    },
    'data-engineering': {
      name: 'Data Engineering',
      description: 'Master the skills needed to build and maintain large-scale data infrastructure.',
      duration: '20 weeks',
      skills: ['SQL', 'ETL', 'Apache Spark', 'Hadoop', 'Data Warehousing']
    }
  };

  const course = courses[id];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-detail">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <div className="course-info">
        <div className="info-item">
          <strong>Duration:</strong> {course.duration}
        </div>
        <div className="info-item">
          <strong>Key Skills:</strong> {course.skills.join(', ')}
        </div>
      </div>
      <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer" className="btn">Register for this Course</a>
    </div>
  );
}

export default CourseDetail;


