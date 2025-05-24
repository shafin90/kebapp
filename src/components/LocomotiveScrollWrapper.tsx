import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { useLocation } from 'react-router-dom';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface Props {
  children: React.ReactNode;
}

const LocomotiveScrollWrapper: React.FC<Props> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      lerp: 0.05,
      class: 'is-revealed',
      reloadOnContextChange: true,
      touchMultiplier: 2,
      smoothMobile: true,
      smartphone: {
        smooth: true,
        multiplier: 1,
        breakpoint: 767
      },
      tablet: {
        smooth: true,
        multiplier: 1,
        breakpoint: 1024
      }
    });

    // Cleanup function
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []); // Initialize only once

  // Handle route changes
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      // Scroll to top on route change
      window.scrollTo(0, 0);
      
      // Small delay to ensure content is rendered
      setTimeout(() => {
        locomotiveScrollRef.current?.update();
      }, 500);
    }
  }, [location.pathname]);

  // Update on window resize
  useEffect(() => {
    const handleResize = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveScrollWrapper; 