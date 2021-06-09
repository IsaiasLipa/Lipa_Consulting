import React from 'react'
import {motion} from 'framer-motion'
import home_pic from './../images/home_pic.jpg'

function Home(){
    return(
        <motion.div initial ={{opacity: 0, x:"-100vw"}} animate={{opacity: 1, x:0}} exit={{opacity:0, x:"-100vw"}} className='mainSection'> 
        <div className="section_text">
        
            <h1>Welcome to Lipa Consulting</h1>
            <br/>
            <p>Lipa Consulting .Inc., is a full service Accounting firm geared toward the needs 
            of small to medium size businesses and individual clients.
            Integrity, innovation, industry expertise, and an on-going commitment to quality are the core values that guide us in our business.
            Our number one priority is your satisfaction; we welcome you to contact us via email or telephone with any concerns or questions you may have.</p>
            <br/>
            <p>We are committed to forming a lasting relationship with our clients and offering the highest level of customer service. Your success is our success!</p>
            <br/>
            <p>This website is designed to provide you with an overview of our firm and the services we provide. We hope this website will become a useful tool or 
                resource for you.</p>
        </div>
        <img src={home_pic} width='100%' height='auto'  className='image' alt='logo pic'/>
        </motion.div>
    )
}

export default Home