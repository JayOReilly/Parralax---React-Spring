import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import space1 from "../src/images/space1.jpg";
import space from "../src/images/solar.jpg";
import city from "../src/images/city.jpg";
import moon from "../src/images/moon.jpg";
import round from "../src/images/round.jpg";
import man from "../src/images/spaceman.gif";
import logo from "../src/images/jorlogo.png"

function App() {
  const ref = useRef();
  return (
    <div>
      
      <Parallax pages={4} ref={ref}>
     
     
     
      
        
        <ParallaxLayer sticky={{ start: 0.3, end: 2.5
         }}>
          <img src={man} alt="" />
        </ParallaxLayer>


        <ParallaxLayer sticky={{start: 1.2, end: 2.2}}
          speed={0.5}
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "20%",
            backgroundPosition: "right"
          }}
        >
          
        </ParallaxLayer>




        <ParallaxLayer
          speed={0.5}
          style={{
            backgroundImage: `url(${round})`,
            backgroundSize: "contain",
          }}
        >
          <h2>Welcome</h2>
          <p>This website is a small project to explore the Parallax concept
            <br/>
            This was built for fun!
            <br/>
            Scroll down
          </p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            backgroundImage: `url(${space})`,
            backgroundSize: "100%",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
         
          offset={2}
          speed={1}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "50%",
            backgroundPosition: "center",
            
          }}
        >
          
        </ParallaxLayer>

        <ParallaxLayer
         
         offset={3}
         speed={1}
         
         style={{
          backgroundImage: `url(${space1})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          
        }}


         
       >
         <h2>You Made It</h2>
        
       </ParallaxLayer>



      </Parallax>
    </div>
  );
}

export default App;
