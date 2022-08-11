import React, { useEffect } from 'react';
import './App.css';
// import Components
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import { Footer } from './Components/Footer/Footer'
import {Contact} from './Components/Pages/Contact'
import {Services} from './Components/Pages/Services'
import {AboutUs} from './Components/Pages/AboutUs'
import {Careers} from './Components/Pages/Careers'
import {OurTeam} from './Components/Pages/OurTeam'
import {PrivacyPolice} from './Components/Pages/PrivacyPolice'
import {TermCondition} from './Components/Pages/TermCondition'
import {OurSpeciality} from './Components/Pages/OurSpeciality'
import Aos from 'aos';

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (<>
    <BrowserRouter>
      <Header />
      
      <main>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/home' element={<Home />}></Route> */}
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/privacyPolice' element={<PrivacyPolice />}></Route>
        <Route path='/termCondition' element={<TermCondition />}></Route>
        <Route path='/aboutUs' element={<AboutUs />}></Route>
        <Route path='/ourTeam' element={<OurTeam />}></Route>
        <Route path='/careers' element={<Careers />}></Route>
        <Route path='/ourSpeciality' element={<OurSpeciality />}></Route>
      </Routes>
      </main>
      <AboutUs />
      <Services />
      <OurSpeciality />
      
    </BrowserRouter>


  </>);
}

export default App;
