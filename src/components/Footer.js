import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";

import {Container,Row,Col} from 'react-bootstrap';
import './../App.css'

function Footer(){
    return(
        <div className="bottom">
            
                <h2>Contact Us:  </h2>
                <div className="PhoneNum">
                <AiIcons.AiFillPhone size={30} className="PhoneIcon"/>
                (631) 720-4949  
                </div>
                
                <a className="emailAdd" href='mailto:lipaconsultingserv@gmail.com'>
                <CgIcons.CgMail size={32}/>
                lipaconsultingserv@gmail.com
                </a>
                
                <a href="https://www.facebook.com/LipaConsulting/?ref=py_c" target='_blank'>
                <FaIcons.FaFacebookSquare size={32} color='white'/>
                </a>

                <a href="https://www.instagram.com/lipaconsulting/" target='_blank'>
                <AiIcons.AiFillInstagram size={39} color='white'/>
                </a>
                
         </div>
    )
}

export default Footer
