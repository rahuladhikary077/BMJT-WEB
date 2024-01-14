import React, { useState } from 'react';
import './Header.css';
import images from '../../assets';
import { Link } from 'react-router-dom';

const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false);

 const toggleMenu = () => {
    setMenuOpen(!menuOpen);
 };

 return (
    <header>
      <div className="navbar">
        <img src={images.navbar2} alt="" className='navbar-page' />
      </div>
      <nav>
        <div className="left">
          <img src={images.bmjtLogoBlack1} alt="bmjt-logo" className="logo" />
        </div>
        <div className={`center ${menuOpen ? 'open' : ''}`}>
          <ul className='list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/rices">Rices</Link></li>
            <li><Link to="/spices">Spices</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>
        <div className="right">
          <img src={images.image1} alt="nav-bar" className="nav-bar" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <img src={images.menuIcon} alt="Menu" className="menu-icon" />
        </button>
      </nav>
    </header>
 );
};

export default Header;