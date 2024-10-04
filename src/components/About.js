import React from 'react';
import './About.css';
import myImage from '../components/images/my-image.jpg'; // Adjust the path to your image file

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="image-container">
        <img src={myImage} alt="About me" className="profile-image" />
      </div>
      <p>
        Hello! I am Gracelin Sweety.I'm a passionate web developer with a keen interest in building responsive and user-friendly applications.
        I enjoy coding and continuously improving my skills in various technologies. When I'm not coding, you can find me
        exploring new tech trends, reading books, or hiking.
      </p>
    </div>
  );
}

export default About;

