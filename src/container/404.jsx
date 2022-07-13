import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  document.title = "Page Not Found | Suryansh";
  
  return (
    <div className='bg-[#0a192f] flex justify-center items-center h-screen'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ y: [100, 0], opacity: 1}} transition={{ duration: 0.5, ease: 'easeInOut', type: 'tween' }}>
        <h1 className='text-[150px] text-[#64ffda] font-semibold lg:text-[150px] xl:text-[240px]'>404</h1>
        <h2 className='text-center font-semibold text-2xl text-[#ccd6f6] lg:text-2xl xl:text-4xl'>Page Not Found</h2>
        <div className='flex -mx-3 mt-8 justify-center items-center'>
          <a href='/' className='border-2 border-[#64ffda] hover:bg-[#112240] text-[#64ffda] font-bold py-2 px-4 rounded inline-flex items-center text-2xl h-16'>Home</a>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound;