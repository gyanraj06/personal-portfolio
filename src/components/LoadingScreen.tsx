import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds loading time
    const intervalTime = 20; // Update every 20ms
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 300); // Small delay before hiding
          return 100;
        }
        return newProgress;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      {/* Loading bar container */}
      <div className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] h-[2px] bg-white/5 rounded-full overflow-hidden">
        {/* Progress bar */}
        <div
          className="h-full bg-[#3CDA64] transition-all duration-100 ease-linear rounded-full shadow-[0_0_15px_rgba(60,218,100,0.4)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Optional: Progress percentage text - remove if you don't want it */}
      {/* <div className="mt-6 text-white/40 text-xs sm:text-sm font-light">
        {Math.round(progress)}%
      </div> */}
    </div>
  );
};

export default LoadingScreen;
