import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouchDevice();

    // Only add cursor listeners if not a touch device
    if (!isTouchDevice) {
      const updateCursorPosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
      };

      window.addEventListener('mousemove', updateCursorPosition);
      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isTouchDevice]);

  // Don't render custom cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className="custom-cursor hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default CustomCursor;
