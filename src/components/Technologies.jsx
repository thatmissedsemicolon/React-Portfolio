import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuery, gql } from '@apollo/client';

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);

  const Technologies = gql`
    query Technologies {
      technologies {
        name
        image
      }
    }
  `;

  const { data } = useQuery(Technologies);

  useEffect(() => {
    setTechnologies(data);
  },[data]);

  return (
    <div id="about" className="bg-[#0a192f]">
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12'>
        <h2 className='text-4xl font-bold px-4 md:px-0 text-center lg:text-start md:text-center text-[#ccd6f6] after:h-[1px] after:bg-[#233554] after:inline-block after:relative after:align-middle after:w-1/4 after:ml-6'>
          / Technologies
        </h2>
        <motion.div whileInView={{ y: [80, 0], opacity: 1}} transition={{ duration: 0.5, ease: 'easeInOut', type: 'tween' }}>
          <p className="mt-12 text-xl text-justify text-[#8892b0]">
            Some other technologies I like to use while working on projects:
          </p>
          <div className='grid grid-cols-3 gap-10 xl:gap-15 mt-8 sm:grid-cols-3 lg:divide-y-0 lg:grid-cols-6 xl:grid-cols-6'>
            {technologies?.technologies?.map((index, i) => (
              <h2 className='text-[#8892b0] text-lg'><img key={i} src={index?.image} alt='logo' className='pointer-events-none w-16 h-16 rounded-full shadow-sm' />{index?.name}</h2>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies;