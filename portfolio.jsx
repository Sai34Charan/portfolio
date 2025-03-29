import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1 className="logo">My Portfolio</h1>
          <ul className="nav-links">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
            <li><NavLink to="/about">About Me</NavLink></li>
            <li><NavLink to="/skills">Skills</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <section className="home">
    <h2>Welcome!</h2>
    <p>Hi, I'm GOPISETTY SAI CHARAN, a passionate full Stack Developer specializing in React.</p>
    <img src="your-photo.jpg" alt="Your Professional" className="profile-photo" />
  </section>
);

const About = () => (
  <section className="about">
    <h2>About Me</h2>
    <p>I am a Full Stack Web Developer. I enjoy Playing chess.</p>
  </section>
);

const Skills = () => (
  <section className="skills">
    <h2>Skills</h2>
    <ul className="skill-list">
      <li>JavaScript - ⭐⭐⭐⭐☆</li>
      <li>React - ⭐⭐⭐⭐☆</li>
      <li>CSS - ⭐⭐⭐⭐☆</li>
    </ul>
  </section>
);

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-card">
      <h3>Project 1</h3>
      <p>To Do List</p>
      <a href="https://github.com/Sai34Charan/to-do-list">Live Demo</a> | <a href="https://github.com/Sai34Charan/to-do-list">GitHub</a>
    </div>
    <div className="project-card">
      <h3>Project 2</h3>
      <p>Health Care Booking System</p>
      <a href="https://github.com/Sai34Charan/to-do-list">Live Demo</a> | <a href="https://github.com/Sai34Charan/to-do-list">GitHub</a>
    </div>
  </section>
);

const Contact = () => (
  <section className="contact">
    <h2>Contact Me</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
    <div className="social-links">
      <a href="https://linkedin.com/gopisetty-sai-charan-gsc-12104016">LinkedIn</a>
      <a href="https://github.com/Sai34charan">GitHub</a>
      <a href="mailto:saicharangopisetty23@gmail.com">Email</a>
    </div>
  </section>
);

export default App;
