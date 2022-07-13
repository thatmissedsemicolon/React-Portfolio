import React, { useState, useEffect } from 'react';
import anime from 'animejs';

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #S',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      })
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  },[])

  return (
    <div className='bg-[#020c1b] justify-center h-screen flex items-center top-0 bottom-0'>
      <div className='loader' isMounted={isMounted}>
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className='w-[100px]'>
          <title>Loader Logo</title>
          <g>
            <path
              stroke="#64ffda"
              fill="#020c1b"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 50, 5
              L 11, 27
              L 11, 72
              L 50, 95
              L 89, 73
              L 89, 28 z"
            />
            <g id="S" transform="translate(-238.695 -107.379)" className='block opacity-0'>
              <text transform="translate(275 175)" fill="#63ffda" font-size="50" font-family="SegoeUI-Semibold, Segoe UI" font-weight="600">
                <tspan x="0" y="0">S</tspan>
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Loader;