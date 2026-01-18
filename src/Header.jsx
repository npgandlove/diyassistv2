
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './DIY Assist v10.png'; // Make sure to add your logo image file

const Header = () => {
  return (
    <header className="app-header">
      <Link to="/">
        <img src={logo} alt="Home" className="app-logo" />
      </Link>
      <nav>
        {/* You can add other navigation links here */}
        {/* <Link to="/Providers">Providers</Link> */}
        
      </nav>
    </header>
  );
};

export default Header;

