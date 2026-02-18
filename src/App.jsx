import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NetflixHome } from './components/NetflixHome';
import { NetflixShows } from './components/NetflixShows';
import { HomeModule } from './components/HomeModule';
import { NetflixMovies } from './components/NetflixMovies';
import { NetflixSports } from './components/NetflixSports';
import { NetflixSpark } from './components/NetflixSpark';
import { NetflixTv } from './components/NetflixTv';
import { Watch } from './components/WatchTask';
import { ErrorNotFound } from './components/ErrorNotFound';
import { TeamDetails } from './components/TeamDetails';
import { Teams } from './components/Teams';
import { FunctionDemo1 } from './components/FunctionDemo1';
import { UseStateDemo1 } from './components/UseStateDemo1';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { UseStateDemo3 } from './components/UseStateDemo3';
import { NavBar } from './components/NavBar';
import { Employees } from './components/Employees';
import { ChangeComponent } from './components/ChangeComponent';
import { Students } from './components/students';
import { FormDemo1 } from './components/form/FormDemo1';
import { FormDemo2 } from './components/form/FormDemo2';
import { FormDemo3 } from './components/form/FormDemo3';
import { FormDemo4 } from './components/form/FormDemo4';
import { FormDemo5 } from './components/form/FormDemo5';
import { FormDemo6 } from './components/form/FormDemo6';
import { FormDemo7 } from './components/form/FormDemo7';
import { FormDemo8 } from './components/form/FormDemo8';
import { FormDemo9 } from './components/form/FormDemo9';
import { FormDemo10 } from './components/form/FormDemo10';
import { FormWatch } from './components/form/FormWatch';
import { ApiDemo1 } from './components/api/ApiDemo1';
import { ApiDemo2 } from './components/api/apiDemo2';
import { ApiDemo3 } from './components/api/apiDemo3';
import { ApiDeom4 } from './components/api/ApiDeom4';
import { ApiDeom5 } from './components/api/ApiDemo5';
import { OmdbMovies } from './components/api/OmdbMovie';
import { MovieDetail } from './components/api/MovieDetail';

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
          <Route path='/watch/:name' element={<Watch/>}></Route>
          <Route path='/team' element={<Teams/>}></Route>
          <Route path='/function' element={<FunctionDemo1/>}></Route>
          <Route path='/teamdetails/:name' element={<TeamDetails/>}></Route>
          <Route path='/*' element={<ErrorNotFound/>} ></Route>
          <Route path='/' element={<HomeModule/>} ></Route>
          <Route path='/usestatedemo1' element={<UseStateDemo1/>}></Route>
          <Route path='/usestatedemo2' element={<UseStateDemo2/>}></Route>
          <Route path='/usestatedemo3' element={<UseStateDemo3/>}></Route>
          <Route path='/employees' element={<Employees/>}></Route>
          <Route path='/change' element={<ChangeComponent/>}></Route>
          <Route path='/student' element={<Students/>}></Route>
          <Route path='/formdemo2' element={<FormDemo2/>}></Route>
          <Route path='/formdemo3' element={<FormDemo3/>}></Route>
          <Route path='/formdemo4' element={<FormDemo4/>}></Route>
          <Route path='/formdemo1' element={<FormDemo1/>}></Route>
          <Route path='/formdemo5' element={<FormDemo5/>}></Route>
          <Route path='/formdemo6' element={<FormDemo6/>}></Route>
          <Route path='/formdemo7' element={<FormDemo7/>}></Route>
          <Route path='/formdemo8' element={<FormDemo8/>}></Route>
          <Route path='/formdemo9' element={<FormDemo9/>}></Route>
          <Route path='/formdemo10' element={<FormDemo10/>}></Route>
          <Route path='/formwatch' element={<FormWatch/>}></Route>
          <Route path='/apidemo1' element={<ApiDemo1/>}></Route>
          <Route path='/apidemo2' element={<ApiDemo2/>}></Route>
          <Route path='/apidemo3' element={<ApiDemo3/>}></Route>
          <Route path='/apidemo4' element={<ApiDeom4/>}></Route>
          <Route path='/apidemo5' element={<ApiDeom5/>}></Route>
          <Route path='/omdbmovie' element={<OmdbMovies/>}></Route>
          <Route path='/movie/:id' element={<MovieDetail/>}></Route>
        </Routes>
        
    </div>
  )
}

export default App
