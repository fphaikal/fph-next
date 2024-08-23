"use client"
import { useEffect, useState } from "react";

function useTailwindBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('');

  useEffect(() => {
    const calculateBreakpoint = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setBreakpoint('sm');
      } else if (width >= 640 && width < 768) {
        setBreakpoint('md');
      } else if (width >= 768 && width < 1024) {
        setBreakpoint('lg');
      } else if (width >= 1024 && width < 1280) {
        setBreakpoint('xl');
      } else if (width >= 1280) {
        setBreakpoint('2xl');
      }
    };

    // Initial calculation
    calculateBreakpoint();

    // Recalculate on resize
    window.addEventListener('resize', calculateBreakpoint);
    return () => window.removeEventListener('resize', calculateBreakpoint);
  }, []);

  return breakpoint;
}

export default useTailwindBreakpoint
