import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-1 bottom-1 flex items-center justify-center overflow-hidden md:right-auto md:left-[210px] md:top-0 md:bottom-[620px] md:absolute'>

    <div className='w-64 h-auto flex items-center justify-center relative md:w-32'>
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />

        <Link href="mailto:jayusp.ca0234@gmail.com" className='flex items-center justify-center 
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
         bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
        font-semibold text-base hover:bg-light  hover:text-dark  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        md:w-10 md:h-10 md:text-[10px]
        '>Hire Me</Link>
    </div>
    </div>
  )
}

export default HireMe