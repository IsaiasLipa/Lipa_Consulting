import React from 'react'
import Header from './Header'
import Footer from './Footer'

import Home from './Home'
import About from './About'
import Taxes from './Taxes'
import Notarization from './Notarization'
import Immigration from './Immigration'

import Navbar from './Navbar'

import {Switch,Route,Redirect, withRouter} from 'react-router-dom'


import styled from 'styled-components';

const StyleMain = styled.div`
    background: #FFE77AFF;
    height:70vh;
    
`;


function Main(){
    return (
        <div style={{"height": "500hv"}}>
            {/* <Navbar /> */}
            <Header/>
            <Navbar/>
            <StyleMain>

            <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/notarization' component={Notarization}/>
            <Route path='/about' component={About}/>
            <Route path='/taxes' component={Taxes}/>
            <Route path='/immigration' component={Immigration}/>
            
            </Switch>
            </StyleMain>
            

            <Footer/>
        </div>
        
    )
}

export default Main;