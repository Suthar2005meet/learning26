import { useState } from 'react';
import ContentComponent from './components/ContentComponent';
import { FooterComponent } from './components/FooterComponent';
import { HeaderComponent } from './components/HeaderComponent';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <HeaderComponent></HeaderComponent>
        <ContentComponent></ContentComponent>
        <FooterComponent></FooterComponent>
    </div>
  )
}

export default App
