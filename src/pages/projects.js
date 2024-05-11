import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/SignUp Page.png"
import project2 from "../../public/images/projects/LiBook.png"
import project3 from "../../public/images/projects/TravelLess App1.png"
import project4 from "../../public/images/projects/Portfolio Dark.png"
import readingsome from "../../public/images/projects/readingsome.png"
import rewarthe from "../../public/images/projects/rewarthe.png"
import Image from 'next/image'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {


    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <Link className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full" href={link} target="_blank">
                <FramerImage src={img} alt={title} className="w-full h-auto" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />
            </Link>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                    <Link href={link} target="_blank"
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
                    >Visit Project</Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {

    return (

        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-4 relative dark:border-light dark:bg-dark xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link className="w-full cursor-pointer overflow-hidden rounded-lg" href={link} target="_blank">
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />
            </Link>

            <div className='w-full flex flex-col items-center justify-between my-2 '>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base '>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='mt-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between px-4'>
                    <Link href={link} target="_blank"
                        className='text-lg font-semibold underline md:text-base'
                    >Visit</Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon /> </Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Jay Patel | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Dynamic Development Portfolio" className="!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl sm:mb-8 xs:!text-3xl lg:flex-col flex items-center justify-center mb-16" />

                    <div className='grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-0'>

                    <div className='col-span-12'>

<FeaturedProject
    title="ReadingSome Blog Website"
    summary="Developed a literary blog using the MERN stack, featuring robust AWS S3 integration for image backup and archival and Firebase for secure user authentication. The platform is designed to engage readers with diverse literary content, allowing for interactive discussions and seamless media handling."
    link="https://www.readingsome.com/" img={readingsome} github="https://github.com/jayp0234/readingsome-blog-webapp" type="Featured Project 1"

/>

</div>
<div className='col-span-6 sm:col-span-12'>

< Project
    title="Personal Portfolio Website"
    summary="Crafted using Next.js and styled with Tailwind CSS, this digital portfolio is a reflection of my development journey, highlighting key projects and showcasing my design proficiency. It encapsulates my dedication to coding and a user-centric approach to design, illustrating my skills in creating responsive, intuitive interfaces. This portfolio not only displays my technical abilities but also my passion for developing solutions that prioritize user experience and aesthetic appeal. It also features screen responsiveness and dark/light mode switch."
    link="/" img={project4} github="https://github.com/jayp0234/jaypatelcodes-portfolio" type="Project 1"
/>

</div>
<div className='col-span-6 sm:col-span-12'>

< Project
    title="Rewarthe App"
    summary="Developed a React Native based shopping rewards app as a team, integrating Firebase for authentication and real-time database management, and Postman for comprehensive API testing. The capstone project focused on improving customer loyalty by offering customized rewards based on user shopping behaviors and preferences."
    link="https://github.com/jayp0234/rewarthe-app-reactnative" img={rewarthe} github="https://github.com/jayp0234/rewarthe-app-reactnative" type="Project 2"
/>

</div>


                        <div className='col-span-12'>

                            <FeaturedProject
                                title="Login/SignUp Functionality Template"
                                summary="A webpage developed using Next.js framework, using TypeScript, MongoDB, and AppWrite. This login page has all the functionalities from taking user requests, communicating with the database, and getting responses from the database where APIs are used to complete this set of tasks. Also has two layers of authentication."
                                link="/projects" img={project1} github="https://github.com/jayp0234/next-login-web" type="Featured Project 2"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
 
                            < Project
                                title="LiBook App"
                                summary="Developed Libook, an advanced library management application utilizing C#, MySQL, and the .NET framework. Libook is engineered to efficiently manage a vast collection of books, streamlining the process of book data retrieval and user interaction. Key functionalities include real-time fetching of book data from the database, processing user inputs, and retrieving up-to-date information on book reservations. This application demonstrates a sophisticated understanding of database management and user interface design, showcasing my capability to create complex, user-focused solutions in the library management sector."
                                link="/projects" img={project2} github="https://github.com/jayp0234/LiBook" type="Project 3"
                            />

                        </div>
                        <div className='col-span-6 sm:col-span-12'>

                            < Project
                                title="TravelLess App"
                                summary="Developed TravelLess, a user-friendly flight booking and reservation app, leveraging C# and the .NET framework. This application streamlines the process of flight search, booking, and management. It features an intuitive search interface, booking capabilities, and data fetching functionality to check the reservation made from text files."
                                link="/projects" img={project3} github="https://github.com/jayp0234/TravelLess" type="Project 4"
                            />

                        </div>

                    

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects