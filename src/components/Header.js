import React from 'react'

import Navbar from './Navbar'
import mainLogo from './../images/Facebook.jpg'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";

import './../App.css'



function Header(){
    return(
        <div className="header">
            <div className="header_left">
                <Navbar/>
                <img src={mainLogo} className={mainLogo} width='auto' height='100%' background-color='white' alt='logo pic'/>
            </div>
            
            <div className='header_right'>
                <a className="link" href="https://www.google.com/maps/place/161+Claywood+Dr,+Brentwood,+NY+11717/@40.771583,-73.2338857,17z/data=!4m5!3m4!1s0x89e8318257d84f31:0xb7b48b5580f6ad81!8m2!3d40.771583!4d-73.2316969" target="_blank">
                    Located at: 161 Claywood Drive, Brentwood, NY 11717
                </a>
                <br/>
                    Hours: Sunday to Friday: 8am - 9pm

                <br/>
                <br/>
                    <button className='change_lan'>Español</button>
            </div>
            
        </div>
    )
}

export default Header