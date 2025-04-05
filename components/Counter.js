import { useState, useEffect, useRef } from 'react';

export default function Counter({ id, end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observer = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // IntersectionObserver setup
    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        animateCounter();
        hasAnimated.current = true;
      }
    }, { threshold: 0.5 });

    if (countRef.current) {
      observer.current.observe(countRef.current);
    }

    return () => {
      if (observer.current && countRef.current) {
        observer.current.unobserve(countRef.current);
      }
    };
  }, []);

  const animateCounter = () => {
    let start = 0;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);
  };

  return (
    <div className="counter" id={id} ref={countRef}>
      {count}
    </div>
  );
} 