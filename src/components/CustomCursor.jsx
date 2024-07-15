import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  useEffect(() => {
    const handleHover = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        cursorRef.current.classList.add('hovered');
      } else {
        cursorRef.current.classList.remove('hovered');
      }
    };

    document.addEventListener('mouseover', handleHover);

    return () => {
      document.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 bg-pink-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-150 ease-in-out shadow-lg"
    ></div>
  );
};

export default CustomCursor;
