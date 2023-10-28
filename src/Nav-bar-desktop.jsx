import React, { useState } from 'react';
import { Link , NavLink} from 'react-router-dom';
import Logo from '/public/shared/logo.svg'
import Iconburger from '/public/shared/icon-hamburger.svg'
import Closeicon from '/public/shared/icon-close.svg'


const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");

const MenuDesplegable = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [imgNavbarIcon, setImgNavbarIcon] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setImgNavbarIcon(!imgNavbarIcon);
  };

  return (
    <div className="nav_bar-mobile">
    <img className='Logo' src={Logo} alt='logo'/>
      <button onClick={toggleMenu}><img className='logo' src={imgNavbarIcon === false ? Iconburger : Closeicon} alt="Imagen" /></button>
      {menuVisible && (
        <div className='nav_bar-desktop'>
        <ul>
        <li><NavLink className={classNameFunc} to="/"><strong>00</strong> Home</NavLink></li>
    <li><NavLink className={classNameFunc} to="/Destination"><strong>01</strong> Destination</NavLink></li>
    <li><NavLink className={classNameFunc} to="/Crew"><strong>02</strong> Crew</NavLink></li>
    <li><NavLink className={classNameFunc} to="/Technology"><strong>03</strong> Technology</NavLink></li>
    </ul>
        </div>
      )}
    </div>
  );
};

export default MenuDesplegable;

