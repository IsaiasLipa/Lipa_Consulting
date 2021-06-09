import React from 'react'
import './../App.css'
import stony_brook from './../images/stony_brook.png'
import {motion} from 'framer-motion'

function Appointment(){
    return(
        <motion.div initial ={{opacity: 0, x:"-100vw"}} animate={{opacity: 1, x:0}} exit={{opacity:0, x:"-100vw"}} className='mainSection'>
            <div className="section_text">
                <h3>On the right you can see the available appointments</h3>
                <br/>
                To schedule one you can give us a call at: (631) 720-4949
                <br/>
                or you can email us at: lipaconsultingserv@gmail.com
                <br/>
            </div>
            <div className="map">
            <iframe  width="10%" height= "400px" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMU_YV4Ix6IkRga32gFWLtLc&key=AIzaSyDNZz8yYz_OQYhCfWpgQbM0aiazLBNFEik"></iframe>
            </div>
                
            
            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=Z2FvbWY2a3RndTdkNWhjaDU0OWlxdXIxdW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23AD1457&amp;showPrint=0&amp;showTabs=0&amp;mode=AGENDA&amp;showCalendars=1&amp;showTz=0"  className="calendar"></iframe>
       
        </motion.div>
    )
}

export default Appointment