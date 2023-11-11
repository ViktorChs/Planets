import React, { useState , useEffect} from "react"


import Menu from "./Menu";


function Technology (){

    useEffect(() => {
        document.body.classList.add('Technology');
        return () => {
          document.body.classList.remove('Technology');
        };
      }, []);

    const [tech, setTech] = useState("Vehicle");

    const cambiarTech = (nuevoTech) => {
        setTech(nuevoTech);
    };
    const techData = {
        Capsule: {
            Description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
            Profession: 'Space capsule',
            img: "./technology/image-space-capsule-portrait.jpg",
            img2:"./technology/image-space-capsule-landscape.jpg"
        },
        Spaceport: {
            Description: ' A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
            Profession: 'Spaceport',
            img: "./technology/image-spaceport-portrait.jpg",
            img2:"./technology/image-spaceport-landscape.jpg"
        },
        Vehicle: {
            Description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
            Profession: 'Launch vehicle',
            img: "./technology/image-launch-vehicle-portrait.jpg",
            img2:"./technology/image-launch-vehicle-landscape.jpg"
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
<div className="Tech_Main-container">
      <div className="Tech_Container-img"><Appp/></div>
  <div className="Tech_Btn-desc-container">
  <div className="Crew_Btn-container">
      <button
       className={tech === 'Vehicle' ? 'techActive' : ''}
       onClick={() => cambiarTech('Vehicle')}>
       1
       </button>
      <button
       className={tech === 'Spaceport' ? 'techActive' : ''}
       onClick={() => cambiarTech('Spaceport')}>
       2
       </button>
      <button
       className={tech === 'Capsule' ? 'techActive' : ''}
       onClick={() => cambiarTech('Capsule')}>
       3
       </button>
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