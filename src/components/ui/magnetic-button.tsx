import * as React from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "./button";

interface MagneticButtonProps extends ButtonProps {
  strength?: number;
  radius?: number;
}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ strength = 0.25, radius = 150, children, className, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      setPosition({
        x: distanceX * strength,
        y: distanceY * strength,
      });
    }, [strength]);

    const handleMouseLeave = React.useCallback(() => {
      setPosition({ x: 0, y: 0 });
    }, []);

    return (
      <motion.div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 20,
          mass: 0.5,
        }}
        className="inline-block"
      >
        <Button ref={ref} className={className} {...props}>
          <motion.span
            animate={{
              x: position.x * 0.3,
              y: position.y * 0.3,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 20,
            }}
            className="flex items-center gap-2"
          >
            {children}
          </motion.span>
        </Button>
      </motion.div>
    );
  }
);

MagneticButton.displayName = "MagneticButton";
