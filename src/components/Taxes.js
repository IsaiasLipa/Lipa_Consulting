import React from 'react';
import styled from 'styled-components';
import IRS_logo from './../images/irs-logo.jpg'
import captiol from './../images/313123.jpg'
import {motion} from 'framer-motion'


function Taxes(){
    return( 
        
        <motion.div initial ={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className='mainSection'>
        <div className='section_text'>
        <h1>Taxes</h1>
        <br/>
            <p>We specialize in tax preparation services for individuals and small businesses. By completing the annual continued education courses required by the IRS (Internal Revenue Service) I can guarantee to my clients to be current in Federal Tax Law Changes and Ethical Standards.
            </p>
            <br/>
            <p>
            
            We will get to our clients the maximum allowed refund and low their tax liability. Our job does not end once we file your taxes, we are here for you any day during the year. 
            
            </p>
            <br></br>
            <p>
            We assist small business owners in making more informed decisions by providing timely and valuable information that can be used to improve decision making, add revenue, and boost profitability. We offer bookkeeping, and payroll services. 
            </p>
            <br/>
            <br/>
            <p> The preparation of Personal taxes is $140</p>
            <br/>
            <p>The preparation of Business taxes is $350</p>
            <br/>
            <p>Book Keeping starts at $120</p>
        </div>
        <img src={IRS_logo} width='100%' height='auto'  className='image' alt='logo pic'/>
        </motion.div>
        
        
    )
}

export default Taxes