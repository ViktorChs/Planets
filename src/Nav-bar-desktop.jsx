import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const MenuDesplegable = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="nav_bar-mobile">
    <img className='Logo' src='Planets/src/shared/logo.svg' alt='logo'/>
      <button onClick={toggleMenu}><img className='logo' src="src/shared/icon-hamburger.svg" alt="" /></button>
      {menuVisible && (
        <div className='nav_bar-desktop'>
          <Link to="/"><strong>00</strong> Home</Link>
          <Link to="/Destination"><strong>01</strong> Destination</Link>
          <Link to="/Crew"><strong>02</strong> Crew</Link>
          <Link to="/Technology"><strong>03</strong> Technology</Link>
        </div>
      )}
    </div>
  );
};

export default MenuDesplegable;

