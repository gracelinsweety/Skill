import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo moved to the left corner */}
        <div className="logo-container">
          <h1 className="logo">My Portfolio</h1>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <FaHome className="nav-icon icon-blue" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              <FaUser className="nav-icon icon-blue" /> About
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={toggleMenu}>
              <FaTools className="nav-icon icon-blue" /> Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleMenu}>
              <FaProjectDiagram className="nav-icon icon-blue" /> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              <FaEnvelope className="nav-icon icon-blue" /> Contact
            </Link>
          </li>
        </ul>

        {/* Menu Icon moved to the right corner */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

