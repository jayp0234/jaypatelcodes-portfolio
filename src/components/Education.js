import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info, className,course}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-3 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
   
    <LiIcon reference={ref}/>
    <motion.div 
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}<a className={className}>{course}</a></h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} | {place} </span>
        <p className='font-medium w-full md:text-sm'>
            {info}
        </p>
    </motion.div>
    </li>
       
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-24 md:my-12'><h2 className='font-bold text-7xl w-full mb-16 text-center hover:underline decoration-[10px] underline-offset-2 lg:!text-6xl md:!text-5xl sm:!text-4xl sm:mb-8 xs:!text-3xl'>_ Education _</h2>
    
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
   <Details className ="text-blue-600 underline decoration-red-600 decoration-4 drop-shadow-lg" 
   type="Diploma in Education, " course="Software Development" place="Southern Alberta Institute of Technology (SAIT)" time="2022-2024"  
   info="As a student at the Southern Alberta Institute of Technology (SAIT), I am currently enrolled in the Diploma in Software Development program, which is an extensive and practical course aimed at honing my skills in software development and programming. The curriculum encompasses a diverse range of subjects such as coding, application development, database management, and web development, with a strong emphasis on experiential learning through various projects and lab work. This program is meticulously designed to prepare me for a successful career in the technology sector, focusing on the latest technologies and contemporary industry practices to ensure that I am thoroughly prepared for the professional world upon graduation." />

</ul>

    </div>
    </div>
  )
}

export default Education