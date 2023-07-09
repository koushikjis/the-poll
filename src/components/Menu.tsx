import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">My App</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/current-polls">Current Polls</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/create-poll">Create Poll</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sign-up">Sign up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
