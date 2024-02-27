import React from 'react';
import logo from '../asserts/logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
<div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
}

export default Header;
