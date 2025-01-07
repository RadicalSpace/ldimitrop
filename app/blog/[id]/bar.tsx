'use client'
import {motion,useScroll} from "framer-motion"

const ReadingBar = () => {
    const {scrollYProgress} = useScroll()
    
    return(
        <div>
            <motion.div style={{
                scaleX: scrollYProgress,
                transformOrigin:'left'
            }} className="bg-blue-400 fixed bottom-0 w-full h-2 transition-all duration-100 ease-in-out z-50"></motion.div>
        </div>
    )
}

export default ReadingBar