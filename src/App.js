import React from 'react'


import Header from './components/Header'

import {AnimatePresence} from 'framer-motion'

import Home from './components/Home'
import About from './components/About'
import Taxes from './components/Taxes'
import Notarization from './components/Notarization'
import Immigration from './components/Immigration'
import Footer from './components/Footer'
import Appointment from './components/Appointment'
import {useState} from 'react'

import './App.css'

import {Switch,Route,useLocation } from 'react-router-dom';



function App() {
  const location = useLocation();
  
  return (
    
    <div className="App" >
      <div className='other_content'>
        
          <Header/>
          
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path='/notarization' component={Notarization}/>
                <Route path='/about' component={About}/>
                <Route path='/taxes' component={Taxes}/>
                <Route path='/immigration' component={Immigration}/>
                <Route path='/appointment' component={Appointment}/>
                <Route path='/' component={Home}/>
              </Switch>
            </AnimatePresence>
          
        
      </div>
      
      <Footer/>

    </div>
  );
}

export default App;
