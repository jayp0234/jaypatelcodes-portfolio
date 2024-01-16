import React from 'react'
import Link from 'next/link'
import { motion, spring } from "framer-motion"

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2 '>
            <MotionLink href="/" 
            className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold drop-shadow-lg hover:text-dark hover:drop-shadow-sm border border-solid border-transparent dark:border-light md:w-14 md:h-14 sm:w-10 sm:h-10 md:text-xl sm:text-sm' 
            whileHover={{
                backgroundColor: ["#121212", "#ff4757", "#7bed9f", "#70a1ff", "#ffa502", "#2ed573", "#121212"],
                scale: 1.2,
                transition: {
                    backgroundColor: { duration: 1, repeat: Infinity },
                    scale : {type:"spring", stiffness: 600, damping: 10 }
                }
        }}  whileTap={{ scale: 0.8 }}
            >
                J.P</MotionLink>
            </div>
    )
}

export default Logo