import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll style it separately.

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Retro Website</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/questions">Questions</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
