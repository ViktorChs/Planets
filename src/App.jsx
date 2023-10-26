import React, {useState, useEffect} from "react"
import { Route, Routes , Link, useLocation} from "react-router-dom"

import Home from './Home'
import Crew from './Crew'
import Destination from './Destination'
import Technology from './Technology'


const DynamicBackground = () => {
  const location = useLocation();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [backgroundSize, setBackgroundSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const routeImages = {
    '/': {
      mobile: '/src/home/background-home-mobile.jpg',
      tablet: '/src/home/background-home-tablet.jpg',
      desktop: '/src/home/background-home-desktop.jpg',
    },
    '/Destination': {
      mobile: 'public/destination/background-destination-mobile.jpg',
      tablet: 'public/destination/background-destination-tablet.jpg',
      desktop:'public/destination/background-destination-desktop.jpg',
    },
    '/Crew': {
      mobile: 'public/crew/background-crew-mobile.jpg',
      tablet: '',
      desktop: 'public/crew/background-crew-desktop.jpg',
    },
    '/Technology': {
      mobile: '/src/technology/background-technology-mobile.jpg',
      tablet: '',
      desktop: '/path-to-desktop-image.jpg',
    },
   
  };

  useEffect(() => {
    let size = '';
    if (windowSize < 768) {
      size = 'mobile';
    } else if (windowSize >= 768 && windowSize < 1280) {
      size = 'tablet';
    } else {
      size = 'desktop';
    }
    setBackgroundSize(size);
  }, [windowSize]);

  let backgroundImage = '';
  const currentRoute = location.pathname;

  if (routeImages[currentRoute]) {
    const routeImage = routeImages[currentRoute];
    if (backgroundSize === 'mobile' && routeImage.mobile) {
      backgroundImage = routeImage.mobile;
    } else if (backgroundSize === 'tablet' && routeImage.tablet) {
      backgroundImage = routeImage.tablet;
    } else if (backgroundSize === 'desktop' && routeImage.desktop) {
      backgroundImage = routeImage.desktop;
    }
  }

  return (
    <div  className="AAA" style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
    <p>{backgroundSize}</p>
    {<Routes>
        <Route path='/' element={ <Home />}  />
        <Route path='/Crew' element={ <Crew />} />
        <Route path='/Destination' element={ <Destination />} />
        <Route path='/Technology' element={ <Technology />} />
      </Routes> }
      </div>
  );
};
  
function App() {
return(
    <div>
<DynamicBackground />
      
      </div>
)
}

export default App



