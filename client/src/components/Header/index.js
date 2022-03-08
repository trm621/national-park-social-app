import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Welcome to Trail Talk</h1>
          <h3>See what visitors to National Parks are saying today</h3>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <Link to="/about-us">About Us</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>  
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/donation">Donation</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
