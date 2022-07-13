import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import logo from '../assets/profile.jpg';

const Intro = () => {
  return (
    <div className="bg-[#0a192f]">
      <div id="intro" className='bg-[#0a192f] mx-auto max-w-7xl px-4 sm:px-6 h-screen md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between'>
        <div className="sm:text-center lg:text-left">
          <motion.h1 whileInView={{ x: [-100, 0], opacity: 1}} transition={{ duration: 0.5, ease: 'easeInOut', type: 'tween' }} className="text-4xl font-semibold text-[#ccd6f6] sm:text-5xl mt-30 md:text-6xl lg:mt-0">
            <Typewriter
              onInit={(typewriter) => {
              typewriter.typeString('Hello, I am <span style="color: #64ffda;">Suryansh</span>.')
              .start();
              }}
            />
            <h2 className="mt-2 text-xl sm:text-4xl font-bold text-[#939cb8]">
              I create web applications.
            </h2>
            <p className="text-[#8892b0] py-6 max-w-[700px] text-lg">
              I'm a Computer Science student based in Florida. I have great interest in full-stack development, artificial intelligence, and machine learning.{" "}
            </p>
            <a href="mailto:suryanshanand@icloud.com" className="border-2 border-[#64ffda] hover:bg-[#112240] text-[#64ffda] font-bold py-2 px-4 rounded inline-flex items-center text-2xl h-16">
              <svg class="fill-current h-6 mr-2" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path></svg>
              Say, hi!
            </a>
          </motion.h1>
        </div>
        <motion.img
          whileInView={{ x: [100, 0], opacity: 1}} transition={{ duration: 0.5, ease: 'easeInOut', type: 'tween' }}
          src={logo}
          alt="profile-logo"
          className="md:w-2/6 mt-10 sm:block w-6/12 mb-20 lg:w-4/12 pointer-events-none rounded-md"
        />
      </div>
    </div>
  )
}

export default Intro;