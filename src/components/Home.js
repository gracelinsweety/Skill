import React from "react";
import "./Home.css";

const Home = () => {
  const message = "Hello! Welcome to my portfolio"; // Full message to display

  return (
    <div className="home">
      <div className="home-container">
        <div className="text-frame">
          <h1 className="welcome-message">{message}</h1>
          <p className="subtitle">I am a passionate web developer crafting beautiful and interactive web applications.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

