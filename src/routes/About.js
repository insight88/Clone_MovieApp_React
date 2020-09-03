import React from 'react';
// import Navigation from '../components/Navigation';
import './About.css';

function About(props) {
  return (
    <div className="about__container">
      <img
        src="https://raw.githubusercontent.com/insight88/clone_movieapp_react/master/src/img/profile.jpg"
        alt="insight88"
      />
      <ul>
        <li class="title">Skills</li>
        <li>HTML / CSS / SCSS</li>
        <li>Vanilla JavaScript</li>
        <li>Node JS</li>
        <li>Gulp, Webpack</li>
        <li>Python</li>
        <li>Django</li>
        <li>etc. Linux Commands, HTTP</li>
      </ul>
      <a
        href="https://github.com/insight88/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Check my Projects, KPKIM's Github</span>
      </a>
    </div>
  );
}

export default About;
