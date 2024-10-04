// src/components/Skills.js

import React from 'react';
import './Skills.css'; // Create a separate CSS file for styling if needed

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Beginner' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
    { name: 'SQL', level: 'Beginner' }
  ];

  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>Level: {skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
