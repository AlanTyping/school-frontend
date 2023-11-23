'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import './footerNav.css';

const FooterNav = () => {
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
    <nav id='mobile-nav' className={`${hidden ? 'mobile-nav-hidden' : 'mobile-nav'} fixed bottom-0 w-full h-[70px] bg-red-700 md:hidden`}></nav>
  )
}

export default FooterNav