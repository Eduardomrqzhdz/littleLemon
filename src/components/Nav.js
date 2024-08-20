import React, { useState } from 'react';
import './Nav.css';
import littlelemon_logo from '../img/littlelemon_logo.png';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src={littlelemon_logo}/></div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
         <a href='/'> <li>Inicio</li></a>
         <a href='#acerca-de'> <li>Acerca DE</li></a>
         <a href='#menu'> <li>Menu</li></a>
         {/* <a href='#rev'> <li>Reservaciones</li></a> */}
         <a href='#menu'> <li>Ordenar en línea</li></a>
         {/* <a href='#'> <li>Login</li></a> */}
        </ul>
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger"></span>
      </div>
    </nav>
  );
};

export default Nav;
