'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import './mobileHeader.css';

const MobileHeader = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition < lastScrollPosition) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollPosition(currentScrollPosition);
    };
 
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
      <header className={`${hidden && 'header-hidden'} h-[80px] bg-blue-400 flex justify-center xl:h-[80px] top-0 fixed w-full`}>
        
      </header>
  )
}

export default MobileHeader