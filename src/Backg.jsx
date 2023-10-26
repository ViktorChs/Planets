import React, {useState, useEffect} from "react";
i

const routeImage ={
    '/home': {
        mobile: '/src/home/background-home-mobile.jpg',
        table: '/src/home/background-home-mobile.jpg',
        desktop: '/path-to-desktop-image.jpg',
      },
      '/Destination': {
        mobile: '/src/destination/background-destination-mobile.jpg',
        table: '',
        desktop: '/path-to-desktop-image.jpg',
      },
      '/Crew': {
        mobile: '/src/crew/background-crew-mobile.jpg',
        table: '',
        desktop: '/path-to-desktop-image.jpg',
      },
      '/Technology': {
        mobile: '/technology/background-technology-mobile.jpg',
        table: '',
        desktop: '/path-to-desktop-image.jpg',
      },
}

const DynamicBackground = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    let backgroundSize = '';
    if (windowSize <= 0) {
      backgroundSize = 'mobile';
    } else if (windowSize <= 768) {
      backgroundSize = 'tablet';
    } else if (windowSize <= 1280) {
      backgroundSize = 'desktop';
    }
  
    return (
      <div>
        {/* Resto del contenido de tu componente */}
        <div>{backgroundSize}</div>
      </div>
    );
  };
  