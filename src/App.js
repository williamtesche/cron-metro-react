import React,{useState} from 'react';
import './App.css';

import Cronômetro from './components/Cronometro.js';
import BtnCronometro from './components/BtnCronometro.js';


function App() {

  const [time,setTime] = useState({ms:0, s:0, m:0, h:0});
  return (
    <div className="main-section">
    <duv className="clock-holder">
        <div className="stopwatch">

        <Cronômetro time={time} />
         <BtnCronometro />

        </div>

    </duv>
    </div>
  );
}

export default App;
