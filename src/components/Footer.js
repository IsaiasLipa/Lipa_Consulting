import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import {motion} from 'framer-motion'

import './../App.css'

function Footer(){
    return(
        <motion.div initial ={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className='mainSection'>
        <div className="bottom">
            
                <h2>Contact Us:  </h2>
                <div className="footer_icon">
                <AiIcons.AiFillPhone size={30} className="PhoneIcon"/>
                (631) 720-4949  
                </div>
                
                <a className="emailAdd" href='mailto:lipaconsultingserv@gmail.com' className="footer_icon">
                <CgIcons.CgMail size={32}/>
                lipaconsultingserv@gmail.com
                </a>
                
                <a href="https://www.facebook.com/LipaConsulting/?ref=py_c" target='_blank' >
                <FaIcons.FaFacebookSquare size={32} color='white'/>
                </a>

                <a href="https://www.instagram.com/lipaconsulting/" target='_blank' >
                <AiIcons.AiFillInstagram size={39} color='white'/>
                </a>
                
         </div>
         </motion.div>
    )
}

export default Footer
