import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work, className}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-3 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
   
    <LiIcon reference={ref}/>
    <motion.div 
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target="_blank" className={className}>@{company}</a></h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} | {address} </span>
        <p className='font-medium w-full md:text-sm'>
            {work}
        </p>
    </motion.div>
    </li>
       
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-24 md:my-12'><h2 className='font-bold text-7xl w-full mb-16 text-center hover:underline  decoration-[10px] underline-offset-2 lg:!text-6xl md:!text-5xl sm:!text-4xl sm:mb-8 xs:!text-3xl '>_ Experience _</h2>
    
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 '>
   <Details className ="text-[#f97316] underline decoration-company decoration-4 drop-shadow-lg" position="Web Developer Intern" company="Dolphine Software Technologies" time="Nov 2023 - May 2024" address="Remote" 
   work="Collaborated with a team of 6 developers to design and implement core functionalities of a telehealth application, using
JavaScript, React Native, and Node.js. Worked with payment gateway APIs such as Stripe and PayPal to facilitate secure transactions for health consultations and services, processing over $35,000 in transactions monthly. Successfully managed project tasks and timelines, ensuring timely delivery and meeting all project milestones. Documented technical specifications, API endpoints, and user guides to facilitate team collaboration and future maintenance." 
   companyLink="https://dolphinsoftwaretechnologies.com/" />


</ul>


    </div>
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

<motion.div
style={{scaleY: scrollYProgress}}
className='absolute left-9 top-4 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 '>
<Details className ="text-[#2761ae] underline decoration-company decoration-4 drop-shadow-lg" position="Software Developer Intern" company="Sys Creations Inc." time="May 2023 - Aug 2023" address="Burlington, ON" 
work="Contributed to the development of a dynamic web application with a 43% increase in user engagement, using React.
js, TypeScript, and MongoDB. Enhanced application functionality by integrating RESTful APIs using Spring Boot. Participated in deploying automated testing using Docker and continuous integration processes to ensure optimal
system performance. Assisted in developing a comprehensive appointment scheduling system and implemented best practices for responsive
design and API security, prioritizing data privacy and user safety." 
companyLink="https://www.syscreations.com/" />


</ul>


</div>
    </div>
  )
}

export default Experience