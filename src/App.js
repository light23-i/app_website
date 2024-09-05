import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AboutUs from './pages/AboutUs';
import CourseDetail from './pages/CourseDetail';

import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Router>
      <div className={`App ${scrolled ? 'scrolled' : ''}`}>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/courses" component={Courses} />
            <Route path="/courses/:id" component={CourseDetail} />
            <Route path="/about-us" component={AboutUs} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;