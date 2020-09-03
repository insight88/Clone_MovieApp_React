import React from 'react';
// import Navigation from '../components/Navigation';
import './About.css';

function About(props) {
  return (
    <div className="about__container">
      <img src="../img/profile.jpg" alt="insight88" />
      <a
        href="https://github.com/insight88/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span> Github Address</span>
      </a>
    </div>
  );
}

export default About;
