import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AnimateCategorySlider = ({ currentCategory, slideDirection, children }) => {
  const slideVariants = {
    enter: (slideDirection) => ({
      x: `${100 * slideDirection}%`,
      opacity: 0,
      transition: { ease: "linear", duration: 0.2 }
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { ease: "linear", duration: 0.2 }
    },
    exit: (slideDirection) => ({
      x: `${-100 * slideDirection}%`,
      opacity: 0,
      transition: { ease: "linear", duration: 0.2 }
    }),
  };


  return (
    <div className='relative z-10'>
      <AnimatePresence mode='wait'>
        <motion.div className='absoulte top-0 left-0 w-full h-full' key={currentCategory} custom={slideDirection} variants={slideVariants} initial="enter" animate="center" exit="exit">
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AnimateCategorySlider;