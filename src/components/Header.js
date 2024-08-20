import React from 'react';
import { Link } from 'react-router-dom';
import restauranfood from '../img/restauranfood.jpg';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Somos un restaurante mediterráneo de propiedad familiar, centrado en recetas tradicionales servidas con un toque moderno. 
        </p>
        <Link to="/reserva"><button className="reserve-btn" aria-label='On Click'>Reservar una mesa</button></Link>
      </div>
      <div className="header-image">
        <img src={restauranfood} alt="Restaurant" />
      </div>
    </header>
  );
}

export default Header;
