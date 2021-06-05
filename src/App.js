import React from 'react'

import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header'

import Home from './components/Home'
import About from './components/About'
import Taxes from './components/Taxes'
import Notarization from './components/Notarization'
import Immigration from './components/Immigration'
import Footer from './components/Footer'

import './App.css'

import {Switch,Route,Redirect, withRouter} from 'react-router-dom'



function App() {
  return (
    
    <div className="App" >
      <div className='other_content'>
        <BrowserRouter>
          <Header/>
          <div className="mainSection">
            <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/notarization' component={Notarization}/>
            <Route path='/about' component={About}/>
            <Route path='/taxes' component={Taxes}/>
            <Route path='/immigration' component={Immigration}/>
            
            </Switch>
          </div>
        </BrowserRouter>
      </div>
      
      <Footer/>

    </div>
  );
}

export default App;
