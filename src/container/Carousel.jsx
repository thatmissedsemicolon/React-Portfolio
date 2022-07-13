import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { motion } from 'framer-motion';

const Carousel = () => {
  const [carousel, setCarousel] = useState([]);

  const Carousel = gql`
    query Carousel {
      carousel {
        class
        image
      }
    }
  `;

  const { data } = useQuery(Carousel);

  useEffect(() => {
    setCarousel(data);
  },[data])

  return (
    <div className="max-w-5xl mx-auto lg:px-8 px-4 pt-0 md:pt-0 lg:pt-8">
      <div id="carousel" className="carousel slide relative hidden lg:block" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <motion.div whileHover={{ scale: 1.02 }} className="carousel-inner relative w-full overflow-hidden rounded-[40px]">
          {carousel?.carousel?.map((index) => (
            <div className={`carousel-item ${index?.class} relative float-left w-full`}>
              <img
                src={index?.image}
                className="block w-full"
                alt="Project"
              />
            </div>
          ))}
        </motion.div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel;