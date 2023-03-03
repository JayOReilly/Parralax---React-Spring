
import './App.css';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import { useRef } from 'react';
import earth from '../src/images/night.jpg';
import space from '../src/images/solar.jpg';
import sea from '../src/images/water.jpg';
import world from '../src/images/world.jpg';


function App() {

  const ref = useRef()
  return (
    <div>
     
    <Parallax pages={1} ref={ref}>
      
      
      <ParallaxLayer  
      speed={1}
      style={{
        backgroundImage: `url(${world})`,
        backgroundSize: 'cover',
      }}
      >
        <h2>Welcome</h2>
      </ParallaxLayer>

      <ParallaxLayer offset={1} 
      speed={1.5}
      style={{
        backgroundImage: `url(${earth})`,
        backgroundSize: 'cover',
        
      }}
      
      >
        
      </ParallaxLayer>

      

     

    </Parallax>

    </div>
  );
}

export default App;
