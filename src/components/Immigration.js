import React from 'react'
import map from './../images/latin_america.jpg'
import {motion} from 'framer-motion'

function Immigration(){
    return(
        <motion.div initial ={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className='mainSection'>
        <div className="section_text">
            <h1 >Immigration Services</h1>
            <br/>
            <p>Immigration forms assistance, with plenty of experience preparing family based immigration forms.
                We will help you fill out your forms, and assist you through your immigration process for a fraction 
                of what an immigration attorney charges.</p>
                <br/>
                <ul className='bullet_list'>
                    <li>  TPS - Temporary Protected Status</li> 
                    <li>  DACA - Deferred Action for Childhood Arrivals</li> 
                    <li>  Employment Authorization Renewal</li> 
                    <li>  Family Petitions </li> 
                    <li>  Adjustments of Status </li> 
                    <li>  Green Card Renewal </li> 
                    <li>  Citizenships </li> 
                    <li>  Affidavits </li> 
                    <li>  Travel Documents - Advanced Parole </li> 
                    <li>  Student Visa </li> 
                    <li>  Visa Invitations </li>
                </ul>
                <br/>
                <p>No legal advice will be offered. We don't do any representation with immigration officials.</p>
        </div>
        <img src={map} width='80%' height='auto'  className='image' alt='logo pic'/>
        </motion.div>
    )
}

export default Immigration