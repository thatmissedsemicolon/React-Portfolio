import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hamburger from "hamburger-react";
import { Link, useLocation } from 'react-router-dom';
import Icon from '../utils/Icon';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if(location.pathname === "/") {
      setIsHome(true);
    }
    else {
      setIsHome(false);
    }
  },[location.pathname]);

  const scroll = (link) => {
    document.getElementById(link.slice(1))?.scrollIntoView({top: 100, behavior: 'smooth'});
  }

  const links = [
    {
      name: 'Intro',
      link: '#intro',
    },
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Projects',
      link: '#projects',
    },
    {
      name: 'Contact',
      link: '#contact',
    }
  ]
  
  return (
    <>
      <nav className="bg-[#0a192f] border-gray-200 z-50 shadow-lg md:px-8 px-1 w-full top-0 sticky">
        <div className='flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto'>
          <div className='flex items-center cursor-pointer'>
            <a href='/'>
              <Icon />
            </a>
          </div>
          <div className='hidden justify-between items-center w-full md:flex md:w-auto cursor-pointer'>
            {isHome ? (
              <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium'>
                {links.map((index) => (
                  <Link to={`/${index?.link}`} onClick={() => scroll(`${index?.link}`)} className='block py-2 px-3 text-[#ccd6f6] hover:text-[#64ffda] rounded-md'>
                    {index?.name}
                  </Link>
                ))}
              </ul>
            ): (
              <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium'>
                {links.map((index) => (
                  <a href={`/${index?.link}`} className='block py-2 px-3 text-[#ccd6f6] hover:text-[#64ffda] rounded-md'>
                    {index?.name}
                  </a>
                ))}
              </ul>
            )}
            <a href='https://firebasestorage.googleapis.com/v0/b/suryansh-portfolio.appspot.com/o/suryansh_resume.pdf?alt=media' rel="noreferrer" target="_blank" className='border-2 border-[#64ffda] hover:bg-[#112240] text-[#64ffda] font-bold py-2 px-4 rounded inline-flex items-center text-sm ml-4'>Resume</a>
          </div>
          <div className="flex md:hidden items-center">
            <Hamburger
              toggled={ toggle }
              size={ 22 }
              duration={ 0.8 }
              distance={ "lg" }
              toggle={ setToggle }
              color={"#64ffda" }
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {toggle && (
          <div className="w-screen h-full fixed top-0 right-0 z-50 backdrop-blur-lg">
            <div className="bg-[#112240] flex flex-col py-6 text-2xl fixed inset-y-0 right-0 h-screen w-4/5 overflow-y-auto shadow-md z-10 animate-slide-in justify-center items-center">
              <ul class="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
                <div className='absolute top-2 right-2'>
                  <Hamburger
                    toggled={ toggle }
                    size={ 22 }
                    duration={ 0.8 }
                    distance={ "lg" }
                    toggle={ setToggle }
                    color={"#64ffda" }
                  />
                </div>
                {isHome ? (
                  <>
                    {links.map((index, i) => (
                      <Link key={i} to={`/${index?.link}`} onClick={() => {scroll(`${index?.link}`); setToggle(false);}} className='block py-2 px-3 text-[#ccd6f6] hover:text-[#64ffda] rounded-md'>
                        <span className='text-[#64ffda]'>{i+1}.</span>&nbsp;{index?.name}
                      </Link>
                    ))}
                  </>
                ): (
                  <>
                    {links.map((index) => (
                      <a href={`/${index?.link}`} className='block py-2 px-3 text-[#ccd6f6] hover:text-[#64ffda] rounded-md'>
                        {index?.name}
                      </a>
                    ))}
                  </>
                )} 
              </ul>
              <a href='https://firebasestorage.googleapis.com/v0/b/suryansh-portfolio.appspot.com/o/suryansh_resume.pdf?alt=media' rel="noreferrer" target="_blank" className='border-2 border-[#64ffda] hover:bg-[#112240] text-[#64ffda] font-bold py-2 px-4 rounded inline-flex items-center text-xl mt-8'>Resume</a>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar;

/*
<a href='/' className='text-xl font-medium text-decoration-none whitespace-nowrap text-[#64ffda]'>
 <h1 className='text-xl font front-medium'>{`SURYANSH`}</h1>
</a>
*/