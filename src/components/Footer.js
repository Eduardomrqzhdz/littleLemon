import React from 'react';
import './Footer.css';
import littlelemon_logo2 from '../img/littlelemon_logo2.png';

const Footer = () => {
    return (
        <footer className='footer-container'>
          <div className='footer-logo'>
            <img src={littlelemon_logo2} alt='' />
          </div>
            <div className='footer-nav'>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href='/'>Inicio</a></li>
                    <a href='#acerca-de'> <li>Acerca DE</li></a>
                    <li><a href='#menu'>Menu</a></li>
                    {/* <li><a href='#'>Reservaciones</a></li> */}
                    <li><a href='#menu'>Ordenar en línea</a></li>
                    {/* <li><a href='/login'>Login</a></li> */}
                </ul>
            </div>
            <div className='footer-contact'>
                <h3>Contact Info</h3>
                <p>Address: 123 Mediterranean Street, Chicago, IL</p>
                <p>Phone: +1 555-555-5555</p>
                <p>Email: contact@littlelemon.com</p>
            </div>
            <div className='footer-social'>
                <h3>Social Media</h3>
                <p><a href='#'>Facebook</a></p>
                <p><a href='#'>Instagram</a></p>
                <p><a href='#'>Twitter</a></p>
            </div>
        </footer>
    );
};

export default Footer;
