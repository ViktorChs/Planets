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
      mobile: './home/background-home-mobile.jpg',
      tablet: './home/background-home-tablet.jpg',
      desktop: './home/background-home-desktop.jpg',
    },
    '/Destination': {
      mobile: './destination/background-destination-mobile.jpg',
      tablet: './destination/background-destination-tablet.jpg',
      desktop:'./destination/background-destination-desktop.jpg',
    },
    '/Crew': {
      mobile: './crew/background-crew-mobile.jpg',
      tablet: './crew/background-crew-tablet.jpg',
      desktop: './crew/background-crew-desktop.jpg',
    },
    '/Technology': {
      mobile: './technology/background-technology-mobile.jpg',
      tablet: './technology/background-technology-tablet.jpg',
      desktop:'./technology/background-technology-desktop.jpg',
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



