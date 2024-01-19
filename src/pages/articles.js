import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/smooth scrolling in reactjs.png"
import article3 from "../../public/images/articles/dummy.png"
import TransitionEffect from '@/components/TransitionEffect'



const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

const x = useMotionValue(0);
const y =useMotionValue(0);
const imgRef = useRef(null);


function handleMouse(event) {
   imgRef.current.style.display ="inline-block";
   x.set(event.pageX);
   y.set(-10);
}
function handleMouseLeave(event) {
    imgRef.current.style.display ="none";
   x.set(0);
   y.set(0);
}

    return (
        <Link href={link} target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>

            <FramerImage style={{x:x,y:y}} initial={{opacity:0}} whileInView={{opacity:1, transition: {duration:0.2}}} ref={imgRef}src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
        </Link>

    )
}

const Article = ({ img, title, date, link }) => {

    return (
        <motion.li
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>

        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {

    return (
        <li className='col-span-1 w-full p-4 bg-light border border-dark rounded-2xl relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
            <Link className="w-full inline-block cursor-pointer overflow-hidden rounded-lg" href={link} target="_blank">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <Link href={link} target="_blank" >
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const articles = () => {
    return (
        <>

            <Head>
                <title>Jay Patel | Articles Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>

                    <AnimatedText text="Word changes World" className='!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl sm:mb-8 xs:!text-3xl lg:flex-col flex items-center justify-center mb-16' />

                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                        <li>
                            <FeaturedArticle title="Build A Custom Pagination Component In Reactjs From Scratch"
                                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                                time="9 mins read time"
                                link="/"
                                img={article1} />

                        </li>

                        <li>   <FeaturedArticle title="Generate smooth scrolling effect In Reactjs From Scratch"
                            summary="Learn how to smooth scrolling effect in ReactJS from scratch. 
                                Follow this step-by-step guide to smooth scrolling in your ReactJS project."
                            time="5 mins read time"
                            link="/"
                            img={article2} />
                        </li>

                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-28 md:text-2xl md:my-8 md:mt-16'>All Articles</h2>

                    <ul>
                        <Article title="2024 Software Development Trends" img={article3} date="2024" link="/" />

                        <Article title="Predictions 2024: Software Development" img={article3} date="2024" link="/" />

                        <Article title="AI and Machine Learning for Predictive Analytics" img={article3} date="2023" link="/" />

                        <Article title="Quantum Computing" img={article3} date="2024" link="/" />

                        <Article title="Front-End Frameworks" img={article3} date="2022" link="/" />
                    </ul>

                </Layout>
            </main>

        </>
    )
}

export default articles