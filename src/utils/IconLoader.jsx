import React from 'react';
import { motion } from 'framer-motion';
import { FiLoader } from 'react-icons/fi';

const Loader = () => {
  return (
    <div className='bg-[#0a192f] justify-center h-screen flex flex-col items-center top-0 bottom-0'>
      <motion.div className='text-[#64ffda]'
        initial={{ scale: 1.0, opacity: 0.25 }}
        animate={{ scale: 0.9, opacity: 0.75 }}
        transition={{
          yoyo: Infinity,
          duration: 0.5,
          ease:"linear",
        }}
      >
        <FiLoader size={48} />
      </motion.div>
    </div>
  )
}

export default Loader;