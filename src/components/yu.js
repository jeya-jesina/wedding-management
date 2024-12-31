import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false); // State to toggle navbar on mobile

  const handleNavToggle = () => {
    setNavOpen(!navOpen); // Toggle the navigation state
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h4>𝓗𝓮𝓪𝓿𝓮𝓷𝓵𝔂 𝓓𝓪𝔂</h4>
        </div>
        <button className="navbar-toggle" onClick={handleNavToggle}>
          {navOpen ? "✖" : "☰"}
        </button>
        <nav className={`nav-links ${navOpen ? "active" : ""}`}>
          <Link className="nav-link" to="/" onClick={() => setNavOpen(false)}>𝓗𝓸𝓶𝓮</Link>
          <Link className="nav-link" to="/About" onClick={() => setNavOpen(false)}>𝓐𝓫𝓸𝓾𝓽</Link>
          <Link className="nav-link" to="/Events" onClick={() => setNavOpen(false)}>𝓔𝓿𝓮𝓷𝓽𝓼</Link>
          <Link className="nav-link" to="/Services" onClick={() => setNavOpen(false)}>𝓢𝓮𝓻𝓿𝓲𝓬𝓮𝓼</Link>
          <Link className="nav-link" to="/Reviews" onClick={() => setNavOpen(false)}>𝓡𝓮𝓿𝓲𝓮𝔀𝓼</Link>
          <Link className="nav-link" to="/Contact" onClick={() => setNavOpen(false)}>𝓒𝓸𝓷𝓽𝓪𝓬𝓽</Link>
        </nav>
        <div className={`header-buttons ${navOpen ? "hidden" : ""}`}>
          <Link className="btn-login" to="/Login">Login</Link>
          <Link className="btn-signup" to="/SignUp">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
