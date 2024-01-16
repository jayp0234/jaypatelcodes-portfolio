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
   <Details className ="text-blue-600 underline decoration-slate-600 decoration-4 drop-shadow-lg" position="Computing Solutions Advisor" company="Best Buy" time="Jul 2023 - Present" address="Calgary, CA" 
   work="As a Computing Solutions Advisor at Best Buy, my primary responsibility is 
   to assist customers in finding the perfect computing solutions to meet their needs. 
   I provide expert guidance on laptops, desktops, tablets, softwares and accessories, 
   ensuring customers make informed decisions. My role involves staying up-to-date with 
   the latest technology trends and offering exceptional customer service to create a satisfying shopping experience." 
   companyLink="https://www.bestbuy.ca" />

<Details className ="text-red-600 underline decoration-slate-600 decoration-4 drop-shadow-lg" position="Gas Station Attendant" company="Petro-Canada Fuels" time="Feb 2023 - Present" address="Calgary, CA" 
   work="As a Gas Station Attendant at Petro-Canada, I play a pivotal role in providing top-notch customer service. My responsibilities include processing payments for fueling accurately, and maintaining a clean and organized work environment. Also be a friendly face to customers, answering their questions and ensuring their visit to the gas station is convenient and pleasant." 
   companyLink="https://www.petro-canada.ca" />

<Details className ="text-blue-600 underline decoration-amber-400 decoration-4 drop-shadow-lg" position="Omni Fulfillment Associate " company="Walmart" time="Jul 2023 - Jan 2024" address="Calgary, CA" 
   work="As an Omni Fulfillment Associate at Walmart in Calgary, my role involved accurately picking and packing online orders, maintaining inventory, and providing exceptional customer service. Used technology to track and manage orders, ensuring a seamless shopping experience." 
   companyLink="https://www.walmart.ca />" />

<Details className ="text-red-500 underline decoration-blue-600 decoration-4 drop-shadow-lg" position="Produce Clerk" company="Real Canadian Superstore" time="Oct 2022 - Jan 2023" address="Calgary, CA" 
   work="As a Produce Clerk at Real Canadian Superstore I was responsible for maintaining fresh produce displays, ensuring quality and freshness, and assisting customers with their selections. This role involved stocking and organizing the produce section, performing regular quality checks, and handling inventory." 
   companyLink="https://www.realcanadiansuperstore.ca/" />
</ul>

    </div>
    </div>
  )
}

export default Experience