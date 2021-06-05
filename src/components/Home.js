import React from 'react'
import {motion} from 'framer-motion'

function Home(){
    return(
        <motion.div initial ={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className='mainSection'> 
        <div className="section_text">
        
            this is home
        </div>
        </motion.div>
    )
}

export default Home