// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import CSS file for styling
import cs1 from './images/cs1.jpg';
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={cs1} alt="Company Logo" className="navbar-logo" /> {/* Update with your logo path */}
        <input type="text" className="navbar-search" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
