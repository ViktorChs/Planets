import React, {useEffect } from "react"
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

import Logo from '/public/shared/logo.svg'
console.log(Logo)

const routeBackgrounds = {
  'crew': 'la url de la imagen',
}




function Home(){
  /*style={{ background: routeBackgrounds[router.url]}}*/
  
  useEffect(() => {
    document.body.classList.add('Home');
    return () => {
      document.body.classList.remove('Home');
    };
  }, []);





    return(
      
        <>
<Menu />
<div className="body_content-home">
  <div className="body_text-content">
    <span>So, you want to travel to</span>
  <h1>SPACE</h1>
  <img src={Logo}/>
  <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
  </div>
  <NavLink to="/Destination"><button className="body_explore-bt">Explore</button></NavLink>
</div>
</>
    )
}
export default Home