import React from 'react';
import { Intro, About, Technologies, Projects, Contact } from '../components';

const Home = () => {

  document.title = "Suryansh";
  
  return (
    <>
      <Intro />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </>
  )
}

export default Home;