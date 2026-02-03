import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NetflixHome } from './components/NetflixHome';
import { NetflixShows } from './components/NetflixShows';
import { HomeModule } from './components/HomeModule';
import { NetflixMovies } from './components/NetflixMovies';
import { NetflixSports } from './components/NetflixSports';
import { NetflixSpark } from './components/NetflixSpark';
import { NetflixTv } from './components/NetflixTv';
import { NavBar } from './components/navbar';
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
        {/* <MapDemo1></MapDemo1>
        <MapDemo2></MapDemo2>
        <MapDemo3></MapDemo3>
        <MapDemo4></MapDemo4>
        <MapDemo5></MapDemo5>
        <MapDemo6></MapDemo6>
        <MapDemo7></MapDemo7>
        <MapDemo8></MapDemo8>
        <MapDemo9></MapDemo9>
        <MapDemo10></MapDemo10> */}
        <NavBar></NavBar>
        <Routes>
          <Route path="/netflixhome" element={<NetflixHome />}></Route>
          <Route path='/netflixshows' element={<NetflixShows />}></Route>
          <Route path='/netflixmovies' element={<NetflixMovies/> } ></Route>
          <Route path='/netflixsports' element={<NetflixSports/>} ></Route>
          <Route path='/netflixspark' element={<NetflixSpark/>}></Route>
          <Route path='/netflixtv' element={<NetflixTv/>}></Route>
          <Route path='/' element={<HomeModule/>} ></Route>
        </Routes>
        
    </div>
  )
}

export default App
