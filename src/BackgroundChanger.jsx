
import { useLocation } from 'react-router-dom';



import React, { useEffect, useState } from 'react';


function BackgroundChanger() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let backgroundImage = '';

    if (path === '/') {
      // Imagen para móvil
      if (window.innerWidth < 768) {
        backgroundImage = "url('src/home/background-home-mobile.jpg')";
      }
      // Imagen para tableta
      else if (window.innerWidth < 1024) {
        backgroundImage = "url('src/home/background-home-tablet.jpg')";
      }
      // Imagen para escritorio
      else {
        backgroundImage = "url('src/home/background-home-desktop.jpg')";
      }
    } else if (path === '/Crew') {
      // Imagen para móvil
      if (window.innerWidth < 768) {
        backgroundImage = "url('./crew/background-crew-mobile.jpg')";
      }
      // Imagen para tableta
      else if (window.innerWidth < 1024) {
        backgroundImage = "url('./home/background2-tablet.jpg')";
      }
      // Imagen para escritorio
      else {
        backgroundImage = "url('./home/background2-desktop.jpg')";
      }
    } else if (path === '/ruta3') {
      // Imagen para móvil
      if (window.innerWidth < 768) {
        backgroundImage = "url('./home/background3-mobile.jpg')";
      }
      // Imagen para tableta
      else if (window.innerWidth < 1024) {
        backgroundImage = "url('./home/background3-tablet.jpg')";
      }
      // Imagen para escritorio
      else {
        backgroundImage = "url('./home/background3-desktop.jpg')";
      }
    } else if (path === '/ruta4') {
      // Imagen para móvil
      if (window.innerWidth < 768) {
        backgroundImage = "url('./home/background4-mobile.jpg')";
      }
      // Imagen para tableta
      else if (window.innerWidth < 1024) {
        backgroundImage = "url('./home/background4-tablet.jpg')";
      }
      // Imagen para escritorio
      else {
        backgroundImage = "url('./home/background4-desktop.jpg')";
      }
    } else {
      // Imagen por defecto para todas las vistas
      backgroundImage = "url('./home/background-default.jpg')";
    }

    document.body.style.backgroundImage = backgroundImage;
  }, [location]);

  return null;
}

export default BackgroundChanger;