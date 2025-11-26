import React, { useState, useEffect, useRef } from 'react';
import { SlideRenderer } from './components/SlideRenderer';
import { Navigation } from './components/Navigation';
import { SLIDES } from './constants';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const touchStartY = useRef<number | null>(null);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < SLIDES.length) {
      setPage([newPage, newDirection]);
    }
  };

  const goToSlide = (index: number) => {
    const newDirection = index > page ? 1 : -1;
    setPage([index, newDirection]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') paginate(1);
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page]);

  useEffect(() => {
    let lastScrollTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < 800) return;
      if (e.deltaY > 0) { paginate(1); lastScrollTime = now; }
      else if (e.deltaY < 0) { paginate(-1); lastScrollTime = now; }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [page]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    const minSwipeDistance = 50;
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) paginate(1); 
      else paginate(-1);         
    }
    touchStartY.current = null;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <main className="relative w-full h-full">
        {SLIDES.map((slide, index) => (
           <SlideRenderer key={slide.id} slide={slide} isActive={page === index} direction={direction} />
        ))}
      </main>
      <Navigation currentSlide={page} totalSlides={SLIDES.length} onNext={() => paginate(1)} onPrev={() => paginate(-1)} goToSlide={goToSlide} />
      
      <div className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center gap-3 pointer-events-none">
        <span className="text-[10px] bg-black/60 text-white px-2 py-1 rounded backdrop-blur-sm font-bold whitespace-nowrap">
          {page + 1} / {SLIDES.length}
        </span>
        <div className="flex-1 h-1.5 bg-gray-300/30 rounded-full overflow-hidden backdrop-blur-sm">
          {/* DÜZELTME: (page / (SLIDES.length - 1)) formülü ile 0. slaytta width %0 olur */}
          <motion.div 
            className="h-full bg-brand-yellow" 
            initial={{ width: 0 }} 
            animate={{ width: `${(page / (SLIDES.length - 1)) * 100}%` }} 
            transition={{ duration: 0.3 }} 
          />
        </div>
      </div>
    </div>
  );
};
export default App;