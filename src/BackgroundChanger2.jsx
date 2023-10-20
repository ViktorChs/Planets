import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BackgroundChanger = () => {
  const location = useLocation();
  const [background, setBackground] = useState('');

  useEffect(() => {
    // Lógica para establecer el fondo según location.pathname y el tamaño del dispositivo
    const handleBackgroundChange = () => {
      // Determina el fondo según location.pathname y el tamaño del dispositivo
      // Por ejemplo, puedes establecer diferentes fondos para diferentes rutas
      // o cambiar el fondo según window.innerWidth

      if (location.pathname === '/page1') {
        setBackground('background-image-1.jpg');
      } else if (location.pathname === '/page2') {
        setBackground('background-image-2.jpg');
      } else {
        setBackground('default-background.jpg');
      }
    };

    handleBackgroundChange(); // Configuración inicial del fondo

    window.addEventListener('resize', handleBackgroundChange); // Escucha los eventos de cambio de tamaño de ventana

    return () => {
      window.removeEventListener('resize', handleBackgroundChange); // Limpia el event listener
    };
  }, [location.pathname]);

  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Tus otros componentes */}
    </div>
  );
};

export default BackgroundChanger;