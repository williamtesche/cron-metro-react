import React,{useState} from 'react';
import './App.css';

import Cronômetro from './components/Cronometro.js';
import BtnCronometro from './components/BtnCronometro.js';


function App() {

  const [time,setTime] = useState({ms:0, s:0, m:0, h:0});
  return (
    <div className="App">
    <Cronômetro time={time} />
    <BtnCronometro />
    </div>
  );
}

export default App;
