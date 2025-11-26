import React from 'react';
import { NavigationProps } from '../types';

export const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, goToSlide }) => {
  
  return (
    <>
      {/* --- MASAÜSTÜ GÖRÜNÜMÜ (Sadece Noktalar) --- */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center">
        {/* Noktaların arkasına hafif bir flu zemin ekledim ki karışık görsellerde de görünsün */}
        <div className="flex flex-col gap-3 bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/10 shadow-lg">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                idx === currentSlide 
                  ? 'bg-brand-yellow h-6 scale-110' 
                  : 'bg-gray-400/70 hover:bg-white hover:scale-110'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* --- MOBİL GÖRÜNÜMÜ --- */}
      {/* Mobilde sağdaki noktalar da butonlar da kaldırıldı. */}
      {/* Sadece App.tsx içindeki Sol Üst Bar ve Swipe özelliği kullanılacak. */}
    </>
  );
};
