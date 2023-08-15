import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id="footer">
      <Link to="/blue">Blue</Link>
      <Link to="/Pink">Pink</Link>
      <Link to="/red">Red</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Footer;