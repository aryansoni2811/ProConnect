import React from 'react';
import { Link } from 'react-router-dom';
import './GlowTextButton.css';

const GlowTextButton = ({ 
  to, 
  children, 
  glowColor = "#37FF8B",
  className = "" 
}) => {
  return (
    <Link to={to} className={`glow-button-link ${className}`}>
      <button 
        className="glow-button" 
        style={{"--animation-color": glowColor}}
        data-text={children}
      >
        <span className="actual-text">&nbsp;{children}&nbsp;</span>
        <span className="hover-text" aria-hidden="true">&nbsp;{children}&nbsp;</span>
      </button>
    </Link>
  );
};

export default GlowTextButton;