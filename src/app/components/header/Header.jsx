'use client'

import React from 'react';
import Nav from '../nav/Nav';
import { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition) {
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
    <div className='h-[80px] w-full'>
      <header className={`${hidden && 'header-hidden'} h-[80px] bg-blue-400 flex justify-center xl:h-[80px] top-0 fixed w-full`}>
        <Nav />
        <nav id='mobile-nav' className={`${hidden ? 'mobile-nav-hidden' : 'mobile-nav'} fixed bottom-0 xl:static w-full xl:w-[200px] bg-red-800 h-[70px] xl:h-full`}></nav>
      </header>
    </div>

  )
}

export default Header