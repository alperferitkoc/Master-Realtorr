import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { NavigationProps } from '../types';

export const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, onNext, onPrev }) => {
  const NavButtons = () => (
    <div className="flex flex-col gap-4 bg-white/90 backdrop-blur-sm p-2 md:p-2 rounded-full shadow-lg border border-gray-100">
      <button onClick={onPrev} disabled={currentSlide === 0} className={`rounded-full transition-colors ${currentSlide === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-800 hover:bg-gray-100 hover:text-brand-yellow'}`}>
        <ChevronUp className="w-6 h-6" />
      </button>
      <button onClick={onNext} disabled={currentSlide === totalSlides - 1} className={`rounded-full transition-colors ${currentSlide === totalSlides - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-800 hover:bg-gray-100 hover:text-brand-yellow'}`}>
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  );

  return (
    <>
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-4">
        <NavButtons />
        <div className="flex flex-col gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-brand-yellow h-4' : 'bg-gray-400'}`} />
          ))}
        </div>
      </div>
      <div className="md:hidden z-50">
        <div className="fixed right-4 bottom-32 z-50">
          <NavButtons />
        </div>
      </div>
    </>
  );
};