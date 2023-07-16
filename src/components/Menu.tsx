import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const Menu: React.FC = () => {
  const { state } = useContext(AppContext);
  console.log("state ===> ", state);

  const isLoggedIn = () => {
    const logStatus = state.user.name !== "" ? true : false;
    return logStatus;
  };

  const memoizedIsLoggedIn = useCallback(isLoggedIn, [state.user]);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          The Poll
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/current-polls">
                Current Polls
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-poll">
                Create Poll
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            {!memoizedIsLoggedIn() && (
              <li className="nav-item">
                <Link className="nav-link" to="/sign-up">
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
        </div>
        {memoizedIsLoggedIn() && (
          <div className="justify-content-end">
            <span>Hello {state.user.name}</span>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/log-out" aria-current="page">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Menu;
