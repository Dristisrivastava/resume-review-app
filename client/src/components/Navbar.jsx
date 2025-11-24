import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <a href='/'><h1>HireGenie</h1></a>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navitem ${isOpen ? 'open' : ''}`}>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/analyse")}>Analyse</button>
          <button onClick={() => navigate("/prepare")}>Prepare</button>
          <button onClick={() => navigate("/resume")}>Resume</button>
          <button  onClick={() => navigate("/interview")}>Interview Prep</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
