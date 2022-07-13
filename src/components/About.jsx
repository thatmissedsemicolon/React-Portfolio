import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './about.css';
import { useQuery, gql } from '@apollo/client';

const About = () => {
  const [languages, setLanguages] = useState([]);

  const Languages = gql`
    query Languages {
      languages {
        name
      }
    }
  `;

  const { data } = useQuery(Languages);

  useEffect(() => {
    setLanguages(data);
  },[data]);

  return (
    <div className="bg-[#0a192f]">
      <div id="about" className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2 className="text-4xl font-bold px-4 md:px-0 text-center lg:text-start md:text-center text-[#ccd6f6] after:h-[1px] after:bg-[#233554] after:inline-block after:relative after:align-middle after:w-1/4 after:ml-6">
          / About Me
        </h2>
        <div>
          <motion.div whileInView={{ y: [80, 0], opacity: 1}} transition={{ duration: 0.5, ease: 'easeInOut', type: 'tween' }}>
            <p className="mt-12 text-xl text-start text-[#8892b0]">
              Hello, I am Suryansh. I am currently a fourth year Computer Science major at <a href="https://www.fsu.edu" rel='noreferrer' target="_blank" className='text-[#64ffda] text-bold link link-underline link-underline-green'> Florida State University</a>
              .&nbsp;My interest in full stack development started back in 2020 when I decided to built a full stack application using React and Node.js that taught me a lot about JavaScript & CSS!
            </p>
            <p className="mt-4 text-xl text-start text-[#8892b0]">
              Here are some technologies I have been recently working with:
            </p>
            <p className="text-[#8892b0] mt-2 grid grid-cols-2 gap-2">
              {languages?.languages?.map((index) => (
                <p><span className='text-[#64ffda]'>▹</span>&nbsp;{index?.name}</p>
              ))}
            </p>
            <p className="mt-4 text-xl text-start text-[#8892b0]">
              Outside of coding, I play a lot of video games and listen to music.
            </p>
          </motion.div>   
        </div>
      </div>
    </div>
  )
}

export default About;