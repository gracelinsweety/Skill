import React from 'react';
import './Skills.css'; // Ensure to style using the light blue theme

const Skills = () => {
  const skills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '85%' },
    { name: 'JavaScript', level: '55%' },
    { name: 'React', level: '40%' },
    { name: 'Python', level: '50%' },
    { name: 'Git', level: '50%' },
    { name: 'SQL', level: '30%' }
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-frame">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar-frame">
                <div className="skill-bar" style={{ width: skill.level }}></div>
              </div>
              <p className="skill-level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

