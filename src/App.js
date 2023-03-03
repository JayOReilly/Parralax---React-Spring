
import './App.css';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import { useRef } from 'react';
import earth from '../src/images/night.jpg';
import space from '../src/images/solar.jpg';
import sea from '../src/images/water.jpg';
import world from '../src/images/world.jpg';
import round from '../src/images/round.jpg';
import man from '../src/images/spaceman.gif';


function App() {

  const ref = useRef()
  return (
    <div>
     
    <Parallax pages={4} ref={ref}>
      
    <ParallaxLayer  

    sticky={{start: 0.6, end:2.5}}
      
     >
      <img src={man} alt=""/>
       
      </ParallaxLayer>



      <ParallaxLayer  
      speed={1}
      style={{
        backgroundImage: `url(${round})`,
        backgroundSize: 'contain',
      }}
      >
        <h2>Welcome</h2>
      </ParallaxLayer>

      <ParallaxLayer offset={1} 
      speed={1.5}
      style={{
        backgroundImage: `url(${space})`,
        backgroundSize: '100%',
        
      }}
      
      >
        
      </ParallaxLayer>

      <ParallaxLayer offset={2} 
      speed={1.5}
      style={{
        backgroundImage: `url(${earth})`,
        backgroundSize: '100%',
        
      }}
      
      >
        
      </ParallaxLayer>

      

     

    </Parallax>

    </div>
  );
}

export default App;
