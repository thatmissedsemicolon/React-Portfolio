import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './components';
import { Home, AllProjects, NotFound } from './container';
import Loader from './utils/Loader';
import ReactGA from "react-ga4";
import { Routes, Route } from 'react-router-dom';

ReactGA.initialize(`${process.env.REACT_APP_GA}`);
ReactGA.send(`${process.env.REACT_APP_SEND}`);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
          element.focus();
        }
      }, 0);
    }

  }, [isLoading]);

  return (
    <>
      {!isLoading ? (
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element ={<Home/>} />
            <Route path='/projects' element={<AllProjects />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      ): (
        <Loader finishLoading={() => setIsLoading(false)} />
      )}
    </>
  )
}

export default App;