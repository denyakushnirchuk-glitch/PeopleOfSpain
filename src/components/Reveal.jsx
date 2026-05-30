import { useEffect, useRef, useState } from 'react';

/*
 * Reveal — fades + lifts its content into place the first time it scrolls
 * into view. Renders a real element (set via `as`) so it never disturbs
 * sibling selectors like `section + section`. Respects reduced motion and
 * degrades gracefully if IntersectionObserver is unavailable.
 */
export default function Reveal({ as: Tag = 'div', className = '', children, delay = 0, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Show immediately when motion is reduced or IO isn't supported
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' is-in' : ''}${className ? ' ' + className : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
