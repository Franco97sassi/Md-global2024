import React, { useState } from 'react';
import './style.css';  // Crearemos este archivo CSS en el siguiente paso

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
          <p>Opción 1</p>
          <p>Opción 2</p>
          <p>Opción 3</p>
        </div>
      )}
    </div>
  );
};

export default HamburguesaMenu;
