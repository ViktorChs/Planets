import React, { useState , useEffect} from "react"

import Techimg6 from "/src/technology/image-launch-vehicle-portrait.jpg"
import Techimg5 from "/src/technology/image-launch-vehicle-landscape.jpg"

import Techimg4 from "/src/technology/image-spaceport-portrait.jpg"
import Techimg3 from "/src/technology/image-spaceport-landscape.jpg"

import Techimg2 from "/src/technology/image-space-capsule-portrait.jpg"
import Techimg1 from "/src/technology/image-space-capsule-landscape.jpg"
import Menu from "./Menu";


function Appp() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);



    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // El segundo argumento debe ser un array vacío para que el efecto se ejecute solo una vez al inicio

 if(windowSize.width <= 904){
      {techData[tech].img}
 } else if (windowSize.width >= 904){
      {techData[tech].img2}
 }

}


function Technology (){

    useEffect(() => {
        document.body.classList.add('Technology');
        return () => {
          document.body.classList.remove('Technology');
        };
      }, []);

    const [tech, setTech] = useState("Capsule");

    const cambiarTech = (nuevoTech) => {
        setTech(nuevoTech);
    };
    const techData = {
        Capsule: {
            Description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
            Profession: 'Space capsule',
            img: {Techimg1},
            img2:{Techimg2}
        },
        Spaceport: {
            Description: ' A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
            Profession: 'Spaceport',
            img: {Techimg3},
            img2:{Techimg4}
        },
        Vehicle: {
            Description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
            Profession: 'Launch vehicle',
            img: {Techimg5},
            img2:{Techimg6}
        }
      }
      function Appp() {
        const [windowSize, setWindowSize] = useState({
          width: window.innerWidth,
        });
      
        useEffect(() => {
          const handleResize = () => {
            setWindowSize({
              width: window.innerWidth,
            });
          };
      
          window.addEventListener('resize', handleResize);
      
      
      
          // Eliminar el event listener cuando el componente se desmonte
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []); // El segundo argumento debe ser un array vacío para que el efecto se ejecute solo una vez al inicio
      
        const getImageSource = () => {
          if (windowSize.width <= 904) {
            return techData[tech].img2;
          } else {
            return techData[tech].img;
          }
        };
    return (
      <img src={getImageSource()} alt="" />
    )
      }
      
    return (
     <>
  <Menu/>
          <p className="Tech_Title-seccion"> 03 Space launch 101 </p>
<div className="Tech_Main-container">
      <div className="Tech_Container-img"><Appp/></div>
  <div className="Tech_Btn-desc-container">
  <div className="Crew_Btn-container">
      <button onClick={() => cambiarTech("Vehicle")}>1</button>
      <button onClick={() => cambiarTech("Spaceport")}>2</button>
      <button onClick={() => cambiarTech("Capsule")}>3</button>
    </div>  
    <div className="Tech_Desc-container">
        <p>The terminology...</p> 
        <p>{techData[tech].Profession}</p>
        <h1>{techData[tech].Name}</h1>
        <p>{techData[tech].Description}</p>
    </div>
          
            
          
    
  </div>
</div>
</>
)    
}
export default Technology