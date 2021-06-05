import React from 'react'
import './../App.css'
import stony_brook from './../images/stony_brook.png'
import {motion} from 'framer-motion'

function About(){
    return(
        <motion.div initial ={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className='mainSection'>
        <div className="section_text">
            <h1>About Lipa Consulting</h1>
            <br/>
            <p>I am a Tax, Accounting, and Business Management Professional offering over 10 years of administrative and 
                office management expertise. Over the course of my career, I have served as a key asset to senior leaders,
                providing critical support and acting as the main point of contact between leaders and employees.</p>
            <br/>
            <p>I got my Bachelor's Degree from Farminadale State College and my Master's from Stony Brook University. Among my colleagues, I am known for being a driven and proactive professional and I am continuously anticipating 
                new challenges.  Having served in the legal, accounting, finance, healthcare and custom print sectors; I have gained
                a considerable level of versatility and have learned to grasp new concepts and adapt quickly.      </p>
            <br/>
            <p>I hold core competencies in tax preparation, payroll, administration, business management, interpersonal communication, 
                client and vendor management, relationship development, confidentiality, accounts payable and receivable.</p>
            <br/>
            <p>My goal is to use all my knowledge and resources to help my community and its diversity at affordable and reasonable prices. 
            </p>
            <br/>
        </div>
        <img src={stony_brook} width='100%' height='auto'  className='image' alt='logo pic'/>
        </motion.div>
    )
}

export default About