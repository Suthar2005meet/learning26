import { useState } from 'react';
import { MapDemo1 } from './components/MapDemo1';
import { MapDemo10 } from './components/MapDemo10';
import { MapDemo2 } from './components/MapDemo2';
import { MapDemo3 } from './components/MapDemo3';
import { MapDemo4 } from './components/MapDemo4';
import { MapDemo5 } from './components/MapDemo5';
import { MapDemo6 } from './components/MapDemo6';
import { MapDemo7 } from './components/MapDemo7';
import { MapDemo8 } from './components/MapDemo8';
import { MapDemo9 } from './components/MapDemo9';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        {/* <HeaderComponent></HeaderComponent>
        <ContentComponent></ContentComponent> 
        <FooterComponent></FooterComponent>*/}
        <MapDemo1></MapDemo1>
        <MapDemo2></MapDemo2>
        <MapDemo3></MapDemo3>
        <MapDemo4></MapDemo4>
        <MapDemo5></MapDemo5>
        <MapDemo6></MapDemo6>
        <MapDemo7></MapDemo7>
        <MapDemo8></MapDemo8>
        <MapDemo9></MapDemo9>
        <MapDemo10></MapDemo10>
        
    </div>
  )
}

export default App
