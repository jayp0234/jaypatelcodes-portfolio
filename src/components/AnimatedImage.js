// AnimatedImage.js

import { motion } from 'framer-motion';
import Image from 'next/image';

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1 }
  }
};

const AnimatedImage = ({ src, alt, className = '', ...rest }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={imageVariants}>
      <Image src={src} alt={alt} className={className} {...rest}/>
    </motion.div>
  );
};

export default AnimatedImage;
