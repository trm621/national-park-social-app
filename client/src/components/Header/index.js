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
          <h1>Trail Talk</h1>
        </Link>

        <nav className="text-center">
  {Auth.loggedIn() ? (
    <>
      <Link to="/profile">Me</Link>
      <a href="/" onClick={logout}>
        Logout
      </a>
    </>
  ) : (
    <>
      <Link to="/login">Login/Signup</Link>
      <Link to="/donations">Donations</Link>
      <Link to="/about-us">About Us</Link>
      {/* <Link to="/usermain">Add a Post</Link> */}
      </>
  )}
</nav>
      </div>
    </header>
  );
};

export default Header;
