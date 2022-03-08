import React from 'react';

const Footer = () => {
  return (
    <footer className="footer w-100 mt-auto p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} by Team TrailTalk
      </div>
    </footer>
  );
};

export default Footer;
