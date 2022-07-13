import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-[#0a192f]">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <div className='flex items-center justify-center pb-6 gap-5'>
          <a href="https://github.com/thatmissedsemicolon" rel='noreferrer' target="_blank"><AiFillGithub size={30} className="text-[#8892b0] hover:text-[#64ffda]"/></a> 
          <a href="https://www.linkedin.com/in/suryansh-anand20" rel='noreferrer' target="_blank"><AiFillLinkedin size={30} className="text-[#8892b0] hover:text-[#64ffda]"/></a>
          <a href="mailto:suryanshanand@icloud.com"><AiOutlineMail size={30} className="text-[#8892b0] hover:text-[#64ffda]"/></a>
        </div>
        <a href='https://github.com/thatmissedsemicolon' rel='noreferrer' target="_blank" className='text-[#8892b0] hover:text-[#64ffda] cursor-pointer'>
          <p className='text-center text-bold'>Designed & developed by Suryansh</p>
          <p className='text-center text-bold'>All rights reserved. ©</p>
        </a>
      </div>
    </div>
  )
}

export default Footer;