import './Navbar.css';

import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className='brand'>
          Cooking Ninja
        </Link>
        <Link to="/create">
          Create Recipe
        </Link>
      </nav>
    </div>
  );
}

export default Navbar

