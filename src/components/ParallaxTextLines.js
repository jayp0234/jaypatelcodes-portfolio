import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState, useEffect } from 'react';

const useParallaxEffect = (speed, reduceForSmallScreen = false) => {
    const { scrollY } = useViewportScroll();
    const [effectiveSpeed, setEffectiveSpeed] = useState(speed);

    useEffect(() => {
        const handleResize = () => {
            const isSmallScreen = window.innerWidth <= 639; // sm breakpoint
            setEffectiveSpeed(reduceForSmallScreen && isSmallScreen ? 0  : speed);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [speed, reduceForSmallScreen]);

    return useTransform(scrollY, (latest) => latest * effectiveSpeed);
};

const ParallaxTextLines = () => {
    const xLeft = useParallaxEffect(-0.1, true);
    const xRight = useParallaxEffect(0.1, true);


    const lines = useMemo(() => ([
        { text: 'HTML', direction: 'left', color: '#ea580c', icon: '/icons/html.png' },
        { text: 'CSS', direction: 'right', color: '#38bdf8', icon: '/icons/css.png' },
        { text: 'JAVASCRIPT', direction: 'left', color: '#facc15', icon: '/icons/javascript1.png' },
        { text: 'MYSQL', direction: 'right', color: '#f87171', icon: '/icons/mysql.png' },
        { text: 'REACT', direction: 'left', color: '#22d3ee', icon: '/icons/react.png' },
        { text: 'JAVA', direction: 'right', color: '#ef4444', icon: '/icons/java.png' },
        { text: 'REACT NATIVE', direction: 'left', color: '#14b8a6', icon: '/icons/reactnative.png' },
        { text: '.NET', direction: 'right', color: '#a855f7', icon: '/icons/net.png' },
        { text: 'MOBILE/WEB DEV', direction: 'left', color: '#ff77e9', icon: '/icons/dev.png' },
        { text: 'FULL STACK', direction: 'right', color: '#E6DB41', icon: '/icons/fullstack.png' },
        { text: 'PHOTOSHOP', direction: 'left', color: '#38bdf8', icon: '/icons/photoshop.png' },
        { text: 'PREMIERE PRO', direction: 'right', color: '#818cf8', icon: '/icons/premierepro.png' },
        { text: 'ILLUSTRATOR', direction: 'left', color: '#f59e0b', icon: '/icons/illustrator.png' },
    ]), []);

    return (
        <>
            <h2 className='font-bold text-7xl mt-32 w-full text-center mb-8 hover:underline  decoration-[10px] underline-offset-2 lg:!text-6xl md:!text-5xl sm:!text-4xl sm:mb-8 xs:!text-3xl md:mt-12'>_ Skills _</h2>
            <div className='text-lg font-bold uppercase mb-9  text-dark/75 flex items-center justify-center dark:text-light/75 md:text-base md:!mt-2 '>Expanding my knowledge</div>
            
            <div className="relative">
                <div className="absolute top-0 left-12 h-full w-1 bg-black dark:bg-light lg:left-0 "></div> {/* Left vertical line */}
                <div className="absolute top-0 right-12 h-full w-1 bg-black dark:bg-light lg:right-0"></div> {/* Right vertical line */}

                <div className="overflow-hidden">
                    {lines.map((line) => (
      <motion.div
      key={line.text}
      style={{ x: line.direction === 'left' ? xLeft : xRight }}
      className="flex justify-center items-center mb-4 space-x-3" // Added space-x-3 for spacing
  >
      <div className="flex items-center justify-center h-16 w-16 rounded drop-shadow-lg 
          dark:shadow-[0_1.2px_1.2px_rgba(255, 255, 255, 0.5)] lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8">
          <Image src={line.icon} alt={`${line.text} Icon`} layout='fill' objectFit="contain" />
      </div>
      <span className="text-4xl font-bold dark:drop-shadow-[0_1.2px_1.2px_rgba(255, 255, 255, 0.5)] lg:text-3xl md:text-2xl sm:text-xl xs:text-lg" style={{ color: line.color }}>
          {line.text}
      </span>
  </motion.div>
  
                    ))}
                </div>
            </div>
        </>
    );
};

export default ParallaxTextLines;
