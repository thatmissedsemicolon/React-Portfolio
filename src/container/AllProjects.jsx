import React, { useState, useEffect } from 'react';
import { FiFolder } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useQuery, gql } from '@apollo/client';
import Loader from '../utils/IconLoader';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  document.title = "Projects | Suryansh";

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
  },[data])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])

  if(loading) return <Loader />
  if(error) return <Loader />

  return (
    <div className='bg-[#0a192f]'>
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12'>
        <h2 className='text-6xl font-bold px-4 md:px-0 text-center lg:text-start md:text-center text-[#ccd6f6]'>
          Projects
        </h2>
        <p className='text-xl font-bold px-4 md:px-0 text-center lg:text-start md:text-center text-[#64ffda] py-4'>
          All the projects I’ve worked on
        </p>
        <motion.div whileInView={{ x: [-100, 0], opacity: 1}} transition={{ duration: 0.5, ease: 'easeInOut', type: 'tween' }} className="mt-16 grid gap-5 rounded-t-lg overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {projects?.projects?.map((index) => (
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
      </div>
    </div>
  )
}

export default AllProjects;