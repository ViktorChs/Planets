import React,{useState, useEffect } from "react"

import Menu from "./Menu";

function Destination(){
  useEffect(() => {
    document.body.classList.add('Destination');
    return () => {
      document.body.classList.remove('Destination');
    };
  }, []);


    const [planet, setPlanet] = useState("Moon");

    const cambiarPlaneta = (nuevoPlaneta) => {
        setPlanet(nuevoPlaneta);
      };

    const planetData = {
        Moon: {
            Description: ' See our planet as you\’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            Distance: '384,400 km',
            TravelTime: '3 days',
            img: "assets/destination/image-moon.webp"
        },
        Mars: {
            Description: '  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
            Distance: '225 mil. km',
            TravelTime: '9 months',
            img: "/src/destination/image-mars.png"
        },
        Europa: {
            Description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            Distance: '628 mil. km',
            TravelTime: '3 years',
            img: "/src/destination/image-europa.png"
        },
        Titan: {
            Description: '  The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            Distance: '1.6 bil. km',
            TravelTime: '7 years',
            img: "/src/destination/image-titan.png"
        }
      };
    return(
        <>
<Menu />
<div className="Main_Content-Destination">
<div className="tag_page">  01 Pick your destination </div>

      <div className="Container_planet-table">
      <img src={planetData[planet].img} alt="" />
        <div className="Container_desc">
    <div className="buttons_planest">
      <button onClick={() => cambiarPlaneta("Moon")}>MOON</button>
      <button onClick={() => cambiarPlaneta("Mars")}>MARS</button>
      <button onClick={() => cambiarPlaneta("Europa")}>EUROPA</button>
      <button onClick={() => cambiarPlaneta("Titan")}>TITAN</button>
    </div>
         <div className="planet_name-desc">
           <h1>{planet}</h1>
          <p>{planetData[planet].Description}</p>
         </div>
         
          <div className="planet_info">
            <div>
             AVG. DISTANCE
            <p>{planetData[planet].Distance}</p>
            </div>
            <div>
            EST. TRAVEL TIME
            <p>{planetData[planet].TravelTime}</p>
            </div>
          </div>
    </div>
      </div>


   </div>
</>

    )
}
export default Destination