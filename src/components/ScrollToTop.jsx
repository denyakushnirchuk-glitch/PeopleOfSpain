import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/* easeInOutCubic — slow start, rockets through middle, soft landing */
function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const rafRef = useRef(null);

  useEffect(() => {
    /* Respect the OS "reduce motion" preference */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, 0);
      return;
    }

    const startY = window.scrollY;
    if (startY === 0) return;

    /* Cancel any scroll already in flight */
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    /* Duration scales with distance: fast for short scrolls, cap at 550ms */
    const duration = Math.min(550, Math.max(160, startY * 0.22));
    const startTime = performance.now();

    function step(now) {
      const t = Math.min((now - startTime) / duration, 1);
      window.scrollTo(0, startY * (1 - ease(t)));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        window.scrollTo(0, 0);   /* guarantee exact top */
        rafRef.current = null;
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pathname]);

  return null;
}
