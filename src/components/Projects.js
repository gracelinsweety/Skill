import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import portfolioImage from '../components/images/my-image.jpg';
import cardiovascularImage from '../components/images/AI_Cardio.jpeg';
import aiInsightImage from '../components/images/1646145453544.png';
import medicalShopImage from '../components/images/1648794675image_2.jpg';
import leafDiseaseImage from '../components/images/pikaso_texttoimage_leaf-disease-detection-using-chat-bot.jpeg';

function Projects() {
  const navigate = useNavigate();

  const projectList = [
   {
      title: 'Cardiovascular Diseases Risk Prediction',
      description: 'A machine learning model that predicts the risk of cardiovascular diseases based on patient health data and lifestyle factors.',
      imageSrc: cardiovascularImage,
      link: '/sample'  // Set link to sample page for demonstration
    },
    {
      title: 'React Portfolio',
      description: 'A personal website built with React to showcase skills, projects, and experiences in a visually appealing format.',
      imageSrc: portfolioImage,
      link: '/sample'  // Set link to sample page for demonstration
    },
    {
      title: 'AI Insight',
      description: 'A project that leverages machine learning models to provide data-driven insights and predictive analytics for visually impaired individuals.',
      imageSrc: aiInsightImage,
      link: '/sample'  // Set link to sample page for demonstration
    },
    {
      title: 'Online Medical Shop',
      description: 'A responsive web application built with HTML, CSS, and JavaScript for browsing and purchasing medical supplies and health products online.',
      imageSrc: medicalShopImage,
      link: '/sample'  // Set link to sample page for demonstration
    },
    {
      title: 'Leaf Disease Detection',
      description: 'An interactive chatbot system that identifies plant leaf diseases using image recognition and provides treatment suggestions.',
      imageSrc: leafDiseaseImage,
      link: '/sample'  // Set link to sample page for demonstration
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageSrc} alt={`${project.title} Thumbnail`} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <button onClick={() => navigate(project.link)} className="project-link">View Project</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

