import React, { useLocation, useState } from "react"
import { useEffect } from "react";
import MenuDesplegable from "./Nav-bar-desktop";
import Menu from "./Menu"



function Crew(){
    
    useEffect(() => {
        document.body.classList.add('Crew');
        return () => {
          document.body.classList.remove('Crew');
        };
      }, []);

    const [crew, setCrew] = useState("Commander");

    const cambiarPj = (nuevoPj) => {
        setCrew(nuevoPj);
    };
    const pjData = {
        Enginner: {
            Name: 'Anousheh Ansari',
            Description: '  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
            Profession: 'Flight Engineer',
            img: "./crew/image-anousheh-ansari.png"
        },
        Commander: {
            Name: 'Douglas Hurley',
            Description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
            Profession: 'Commander',
            img: "./crew/image-douglas-hurley.png"
        },
        Pilot: {
            Name: 'Victor Glover',
            Description: '  Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
            Profession: 'Pilot',
            img: "./crew/image-victor-glover.png"
        },
        Specialist: {
            Name: 'Mark Shuttleworth',
            Description: '  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
            Profession: '  Mission Specialist',
            img: "./crew/image-mark-shuttleworth.png"
        }
      }
      
      
    return (
     <>
     <Menu />
<div>
    Crew
</div>
<div className="Crew_main-container">
<div className="Crew_container-data">
<div className="cont"><img src={pjData[crew].img} alt="Profeccional"/></div>

<hr className="Crew_line-decoration"></hr>
<div className="Crew_Container-bts_cont">
<div className="Crew_container-bts">
      <button 
       className={crew === 'Commander' ? 'activeCrew' : ''}
       onClick={() => cambiarPj("Commander")}></button>
      <button 
       className={crew === 'Enginner' ? 'activeCrew' : ''}
       onClick={() => cambiarPj("Enginner")}></button>
      <button 
       className={crew === 'Pilot' ? 'activeCrew' : ''}
       onClick={() => cambiarPj("Pilot")}></button>
      <button 
       className={crew === 'Specialist' ? 'activeCrew' : ''}
       onClick={() => cambiarPj("Specialist")}></button>
    </div>
    <div className="Crew_desc-container">
          <p>{pjData[crew].Profession}</p>
          <h1>{pjData[crew].Name}</h1>
              <div className="Crew_desc-p">
                    <p>{pjData[crew].Description}</p>
          </div>
    </div>
    </div>
</div>
        
    
    
</div>

</>
)    
}
export default Crew