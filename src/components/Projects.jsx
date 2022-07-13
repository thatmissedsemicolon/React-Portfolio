import React, { useState, useEffect } from 'react';
import { FiFolder } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Carousel from '../container/Carousel';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import IconLoader from '../utils/IconLoader';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const Projects = gql`
    query Projects {
      projects {
        name
        title
        languages
        github
        website
      }
    }
  `;
  
  const { loading, error, data } = useQuery(Projects);

  useEffect(() => {
    setProjects(data);
  },[data]);

  if(loading) return <IconLoader />
  if(error) return <IconLoader />

  return (
    <div className='bg-[#0a192f]'>
      <div id="projects" className='max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12'>
        <h2 className='text-4xl font-bold px-4 md:px-0 text-center lg:text-start md:text-center text-[#ccd6f6] after:h-[1px] after:bg-[#233554] after:inline-block after:relative after:align-middle after:w-1/4 after:ml-6'>
          / Projects
        </h2>
        <Carousel />
        <motion.div whileInView={{ y: [80, 0], opacity: 1}} transition={{ duration: 0.5, ease: 'easeInOut', type: 'tween' }} className="mt-16 grid gap-5 rounded-t-lg overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {projects?.projects?.slice(0,6).map((index) => (
            <motion.div whileHover={{ scale: 1.02 }} className="block p-6 rounded-lg shadow-lg bg-[#112240] max-w-md rounded-t-lg cursor-pointer transition hover:z-[1] relative group">
              <div className='flex items-center justify-between pb-6'>
                <div>
                  <h2 className="text-[#64ffda] font-semibold text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-lg"><FiFolder size={32} fontSize={21}/></h2>
                </div>
                <div className="flex items-center justify-between">
                  <a href={`${index?.github}`} rel="noreferrer" target="_blank"><AiFillGithub size={32} fontSize={21} className="ml-1 text-[#ccd6f6]"/></a>
                  <a href={`${index?.website}`} rel="noreferrer" target="_blank"><FaExternalLinkAlt size={26} fontSize={10} className="ml-1 text-[#ccd6f6]" /></a>
                </div>
              </div>
              <h5 className="mt-4 text-[#ccd6f6] transition group-hover:text-[#64ffda] text-xl leading-tight font-medium mb-2">{index?.name}</h5>
              <p className="text-[#8892b0] text-base mb-4">
                {index?.title}
              </p>
              <p className="text-[#8892b0] text-base mb-4 pt-8">
                {index?.languages}
              </p>
            </motion.div>
          ))}
        </motion.div>
        {projects?.length > 6 && 
          <div className='flex flex-wrap -mx-3 mb-6 mt-8 justify-center items-center'>
            <button type="button" className='border-2 border-[#64ffda] hover:bg-[#112240] text-[#64ffda] font-bold py-2 px-4 rounded inline-flex items-center text-xl h-14' onClick={() => navigate('/projects')}>Show More</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Projects;