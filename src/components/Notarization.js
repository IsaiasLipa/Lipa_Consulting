import React from 'react'
import new_york from './../images/new_york_state.png'
import {motion} from 'framer-motion'

function Notarization(){
    return(
        <motion.div initial ={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className='mainSection'>
        <div className='section_text'>
            <h1>Notarization</h1>
            <br/>
            
                <p>I am a registered New York State Public Notary offering on-
                    site and mobile services traveling to homes, businesses,
                    hospitals, convalescent centers, local coffee shops, and mutually agreed public locations</p>
                    <br/>
                    <ul className='bullet_list'>
                    <li>Power of Attorneys</li>
                    <li>Travel Documents/Travel Consent for Minors </li>
                    <li>Birth Certificates applications</li>
                    <li>Passport Certificates applications for minors</li>
                    <li>Affidavits</li>
                    <li>Various Documents</li>
                    </ul>
                <br/>
                <p>We are also equipped and qualified to perform virtual notarizations as per Governor Cuomo’s Executive Order
                </p>
                Document Notarization starts at $3 
            </div>
            <img src={new_york} width='100%' height='auto'  className='image' alt='logo pic'/>
        </motion.div>
    )
}

export default Notarization