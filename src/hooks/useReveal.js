// =============================================================
// useReveal.js — Intersection Observer hook for scroll reveals
//
// Usage:
//   const ref = useReveal();
//   <div ref={ref} className="reveal"> ... </div>
//
// The hook attaches an IntersectionObserver to the returned ref.
// When the element enters the viewport it gets the class "visible",
// which triggers the CSS transition defined in globals.css.
// =============================================================

import { useEffect, useRef } from 'react';

export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect(); // fire once
        }
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
