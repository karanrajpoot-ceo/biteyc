import { useRef, useState, useCallback, MouseEvent } from 'react';

interface MagneticPosition {
  x: number;
  y: number;
}

interface UseMagneticEffectOptions {
  strength?: number;
  radius?: number;
}

export const useMagneticEffect = (options: UseMagneticEffectOptions = {}) => {
  const { strength = 0.3, radius = 100 } = options;
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState<MagneticPosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < radius) {
      const magneticX = distanceX * strength;
      const magneticY = distanceY * strength;
      setPosition({ x: magneticX, y: magneticY });
    }
  }, [strength, radius]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    ref,
    position,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: position.x === 0 && position.y === 0 ? 'transform 0.3s ease-out' : 'none',
    },
  };
};
