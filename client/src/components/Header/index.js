import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <h1>Welcome to Trail Talk</h1>
          <h3>See what visitors to National Parks are saying today!</h3>
        </Link>

        <nav>
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
