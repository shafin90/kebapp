import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { useLocation } from 'react-router-dom';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface Props {
  children: React.ReactNode;
}

const LocomotiveScrollWrapper: React.FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if device is mobile
    const isMobile = window.innerWidth <= 768;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: !isMobile, // Disable smooth scrolling on mobile
      multiplier: 1.5,
      lerp: 0.08,
      smartphone: {
        smooth: false,
      },
      tablet: {
        smooth: false,
        breakpoint: 768,
      },
    });

    // Update on window resize
    const handleResize = () => {
      const isMobileNow = window.innerWidth <= 768;
      if (locomotiveScrollRef.current) {
        if (isMobileNow) {
          locomotiveScrollRef.current.destroy();
          locomotiveScrollRef.current = null;
          if (containerRef.current) {
            containerRef.current.style.transform = '';
          }
        } else if (!locomotiveScrollRef.current) {
          locomotiveScrollRef.current = new LocomotiveScroll({
            el: containerRef.current!,
            smooth: true,
            multiplier: 1.5,
            lerp: 0.08,
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      locomotiveScrollRef.current?.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveScrollWrapper; 