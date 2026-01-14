import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverableElement = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        !!target.closest('button') ||
        !!target.closest('a') ||
        target.classList.contains('hoverable') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isHoverableElement);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', handleElementHover);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', handleElementHover);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          {/* Core dot */}
          <div className="w-3 h-3 rounded-full bg-white" />
        </motion.div>
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.6 : isHovering ? 1.8 : 1,
            opacity: isVisible ? (isHovering ? 0.6 : 0.3) : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-accent/50" />
        </motion.div>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 2 : 1,
            opacity: isVisible ? (isHovering ? 0.4 : 0.2) : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-radial from-accent/30 to-transparent blur-md" />
        </motion.div>
      </motion.div>

      {/* Hide default cursor globally */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};
