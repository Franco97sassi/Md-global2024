import React, { useState } from 'react';

import './style.css';  // Crearemos este archivo CSS en el siguiente paso
import { Link } from 'react-router-dom';

const HamburguesaMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="hamburguesa-menu">
      <div className="hamburguesa-icon" onClick={toggleMenu}>
        ☰
      </div>
      {menuVisible && (
        <div className="menu-desplegable">
          {/* Aquí colocarías los elementos del menú */}
          <Link className='seccion' to={'/home'}>Home</Link> 
          <p> <Link className='seccion' to={'/servicios'}>Servicios</Link> </p>
         
          <p><Link className='seccion' to={'/cotizar'}>Cotizar</Link></p>
          <p><Link className='seccion' to={'/aduanas'}>Aduanas</Link></p>
          <p><Link  className='seccion' to={'/nosotros'}>Nosotros</Link></p>
        </div>
      )}
    </div>
  );
};

export default HamburguesaMenu;
