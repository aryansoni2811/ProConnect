import React from 'react';
import { Link } from 'react-router-dom';
import './AnimatedButton.css';

const AnimatedButton = ({ to, children, type = "primary", className = "" }) => {
  return (
    <Link
      to={to}
      className={`button-with-icon ${type} ${className}`}
    >
      <svg
        className="icon"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
        />
      </svg>
      <span className="text">{children}</span>
    </Link>
  );
};

export default AnimatedButton;