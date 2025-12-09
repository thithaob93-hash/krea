import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  labelBefore?: string;
  labelAfter?: string;
}

export const ImageComparison: React.FC<ImageComparisonProps> = ({
  beforeImage,
  afterImage,
  labelBefore = "Before",
  labelAfter = "After"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(() => setIsResizing(true), []);
  const handleMouseUp = useCallback(() => setIsResizing(false), []);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, [isResizing]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isResizing || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, [isResizing]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isResizing, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-xl bg-gray-100 select-none group cursor-ew-resize"
      style={{ touchAction: 'none' }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Before Image (Background - visible on the left side of the slider) */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute top-0 left-0 h-full w-full object-cover pointer-events-none"
      />
       <div className="absolute top-4 left-4 z-20 rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm pointer-events-none">
        {labelBefore}
      </div>

      {/* After Image (Foreground - visible on the right side of the slider) */}
      <div
        className="absolute top-0 right-0 h-full w-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="absolute top-0 left-0 h-full w-full max-w-none object-cover" 
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute top-4 right-4 z-20 rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {labelAfter}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center">
            <MoveHorizontal size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};