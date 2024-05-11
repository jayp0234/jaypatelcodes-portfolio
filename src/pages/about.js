import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/profile-about.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import ParallaxTextLines from '@/components/ParallaxTextLines'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }

    }, [isInView, value, motionValue])

    useEffect(() => {

        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })

    }, [springValue, value])

    return <span ref={ref} />;
}

const about = () => {
    return (
        <>
            <Head>
                <title>Jay Patel | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Curiosity ignites Innovation" className="!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl sm:mb-8 xs:!text-3xl lg:flex-col flex items-center justify-center mb-16" />

                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 '>Who I Am</h2>
                            <p className='font-medium'>
                            I&apos;m a passionate Software Development student at Southern Alberta Institute of Technology (SAIT), actively enhancing my skills in a range of technologies. My focus is on coding and creating impactful tech solutions.
                            </p>
                            <p className='my-4 font-medium'>
                            My expertise spans various programming languages and frameworks, including React, Java, Python, and .NET, making me versatile in different tech environments. As a Full Stack Developer, I am adept in both front-end and back-end development, striving for efficient, user-centric web applications. My interest in UI/UX design drives me to create applications that are not only functional but also intuitive and visually engaging.
                            </p>
                            <p className='font-medium'>
                            Committed to continuous learning, I keep pace with evolving tech trends. My goal at SAIT is to merge technical know-how with creativity, contributing to meaningful software development. I look forward to opportunities for collaboration and innovation in this vibrant field.
                            </p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-2 left-10 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 md:left-0'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt="Jay Patel" className='w-full h-auto rounded-2xl'  priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={1} />+
                                </span>
                                <h2 className='=text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={5} />+
                                </span>
                                <h2 className='=text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={3} />+
                                </span>
                                <h2 className='=text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of learning</h2>
                            </div>
                        </div>

                    </div>

                    <ParallaxTextLines />
                    <Experience />
                    <Education />
                </Layout>

            </main>
        </>
    )
}

export default about
