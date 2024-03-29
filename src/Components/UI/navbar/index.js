import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar__links">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </div>
  </div>
);

export default Navbar;
