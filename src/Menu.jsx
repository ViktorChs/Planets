import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuDesplegable from './Nav-bar-desktop';

import logo from "assets/shared/logo.svg"


const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");

function Menu() {
    return(
        <>
    <MenuDesplegable />
<div className='nav_bar-desktop-1024'>
<div>    <img className='Logo' src={logo} alt='logo'/></div>
<div className="nav_bar-decoration"></div>
        <div className="nav_bar-links">
<ul>
    <li><NavLink className={classNameFunc} to="/"><strong>00</strong> Home</NavLink></li>
    <li><NavLink className={classNameFunc} to="/Destination"><strong>01</strong> Destination</NavLink></li>
    <li><NavLink className={classNameFunc} to="/Crew"><strong>02</strong> Crew</NavLink></li>
    <li><NavLink className={classNameFunc} to="/Technology"><strong>03</strong> Technology</NavLink></li>
</ul>
       
        
        
       
        </div>
        </div></>)
}
export default Menu
