import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to trigger fade-in animations when elements enter the viewport.
 * Re-initializes on every route change so animations work after navigation.
 */
export function useScrollAnimation() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to let React finish rendering the new page's DOM
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');

      // Reset any stale in-view classes from previous page visit
      elements.forEach((el) => el.classList.remove('in-view'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              // Unobserve after animating to avoid re-triggering on scroll up/down
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 50); // 50ms gives React time to commit DOM changes

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run on every route change
}

/**
 * Hook to observe a single element (utility).
 */
export function useInView(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
