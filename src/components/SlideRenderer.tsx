import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideData, SlideType } from '../types';
import { MockBrowser } from './MockBrowser';
import { MASTER_REALTOR_LOGO, EMLAK_SEPETTE_LOGO } from '../constants';
import { Check, X } from 'lucide-react';

interface Props {
  slide: SlideData;
  isActive: boolean;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({ y: direction > 0 ? 1000 : -1000, opacity: 0 }),
  center: { zIndex: 1, y: 0, opacity: 1 },
  exit: (direction: number) => ({ zIndex: 0, y: direction < 0 ? 1000 : -1000, opacity: 0 })
};

const ContentWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-full h-full flex flex-col justify-center items-center pt-16 px-6 pb-20 md:pt-12 md:p-12 lg:p-20 overflow-y-auto ${className}`}>
    <div className="w-full max-w-7xl mx-auto">
      {children}
    </div>
  </div>
);

export const SlideRenderer: React.FC<Props> = ({ slide, isActive, direction }) => {
  if (!isActive) return null;

  const getBgClass = () => {
    switch (slide.backgroundColor) {
      case 'dark': return 'bg-brand-dark text-white';
      case 'yellow': return 'bg-brand-yellow text-brand-dark';
      default: return 'bg-brand-gray text-brand-dark';
    }
  };

  // Tablo içeriğini render eden yardımcı fonksiyon (Hem mobil hem masaüstü için ortak mantık)
  const renderCellContent = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? <Check className="inline text-green-600 w-5 h-5" /> : <X className="inline text-red-500 w-5 h-5" />;
    }
    return <span className="font-bold text-gray-700 text-sm md:text-base" dangerouslySetInnerHTML={{__html: val}}></span>;
  };

  return (
    <AnimatePresence custom={direction}>
      <motion.div
        key={slide.id}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ y: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
        className={`absolute top-0 left-0 w-full h-full ${getBgClass()} overflow-hidden`}
      >
        {/* 1. INTRO */}
        {slide.type === SlideType.INTRO && (
          <>
            <div className="absolute inset-0 z-0">
              <img src={slide.image} alt="Background" className="w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
            </div>
            <ContentWrapper className="relative z-10 text-center">
              <motion.img initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} src={MASTER_REALTOR_LOGO} alt="Logo" className="w-40 md:w-56 mx-auto mb-8 drop-shadow-xl" />
              <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-yellow mb-6 tracking-tight">{slide.title}</motion.h1>
              <motion.p className="text-lg md:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed">{slide.subtitle}</motion.p>
            </ContentWrapper>
            <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: [0, 10, 0] }} transition={{ opacity: { delay: 1.5, duration: 1 }, y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }} className="absolute bottom-10 w-full text-center z-20">
              <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest">Kaydırın</span>
            </motion.div>
          </>
        )}

        {/* 2. SECTION HEADER */}
        {slide.type === SlideType.SECTION_HEADER && (
          <ContentWrapper className="text-center">
             {slide.backgroundColor === 'yellow' ? null : (
               slide.id === 3 ? 
               <img src="https://iili.io/KZ2aa8x.png" alt="Master Realtor Logo" className="h-24 md:h-32 mx-auto mb-8 object-contain" /> :
               <img src={EMLAK_SEPETTE_LOGO} alt="Emlak Sepette" className="h-16 md:h-20 mx-auto mb-8 object-contain" />
             )}
             
             <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-8 ${slide.backgroundColor === 'yellow' ? 'text-brand-dark' : 'text-brand-black'}`}>{slide.title}</h2>
             <div className={`h-1.5 w-24 mx-auto mb-8 rounded-full ${slide.backgroundColor === 'yellow' ? 'bg-brand-dark' : 'bg-brand-yellow'}`} />
             <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${slide.backgroundColor === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{slide.description}</p>
          </ContentWrapper>
        )}

        {/* 3. INSTRUCTION */}
        {slide.type === SlideType.INSTRUCTION && (
          <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center pt-20 pb-20 px-6 lg:px-20 gap-8 lg:gap-16 max-w-[1800px] mx-auto">
            <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
               <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${slide.backgroundColor === 'yellow' ? 'text-brand-dark' : 'text-brand-dark'}`}>{slide.title}</h2>
               {slide.subtitle && (<h3 className="text-xl md:text-2xl font-semibold text-brand-yellow mb-6">{slide.subtitle}</h3>)}
               <div className="text-lg text-gray-700 leading-relaxed space-y-4">{slide.description}</div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 h-[30vh] lg:h-[60vh]">
              {slide.hideOverlay ? (
                 <img src={slide.image} alt="Sunum görseli" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
              ) : (
                <MockBrowser url={slide.browserUrl || "..."} className="w-full h-full shadow-2xl"><img src={slide.image} className="w-full h-full object-cover" /></MockBrowser>
              )}
            </div>
          </div>
        )}

        {/* 4. COMPARISON TABLE (MOBİL İÇİN ÖZEL DÜZENLEME) */}
        {slide.type === SlideType.COMPARISON_TABLE && slide.comparisonData && (
          <ContentWrapper>
            <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 text-brand-dark">{slide.title}</h2>
            
            {/* MASAÜSTÜ TABLO (hidden md:block) */}
            <div className="hidden md:block w-full overflow-x-auto bg-white rounded-xl shadow-xl">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="p-4 text-left text-lg">Özellik</th>
                    <th className="p-4 text-center text-lg border-l border-gray-600">{slide.comparisonData.col1Title}</th>
                    <th className="p-4 text-center text-lg border-l border-gray-600 text-brand-yellow">{slide.comparisonData.col2Title}</th>
                  </tr>
                </thead>
                <tbody>
                  {slide.comparisonData.rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium text-gray-800 border-b">{row.feature}</td>
                      <td className="p-4 text-center border-b border-l">{renderCellContent(row.val1)}</td>
                      <td className="p-4 text-center border-b border-l bg-brand-yellow/5">{renderCellContent(row.val2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBİL KART GÖRÜNÜMÜ (md:hidden) - DÜZELTME BURADA */}
            <div className="md:hidden w-full space-y-4">
              {slide.comparisonData.rows.map((row, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <div className="font-bold text-gray-800 mb-3 border-b pb-2">{row.feature}</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col items-center p-2 bg-gray-50 rounded">
                      <span className="text-xs text-gray-500 mb-1">Ofissiz</span>
                      {renderCellContent(row.val1)}
                    </div>
                    <div className="flex flex-col items-center p-2 bg-brand-yellow/10 rounded border border-brand-yellow/20">
                      <span className="text-xs text-brand-dark font-bold mb-1">Dijital</span>
                      {renderCellContent(row.val2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentWrapper>
        )}

        {/* 5. TILED GRID (MOBİL İÇİN PADDING DÜZELTMESİ) */}
        {slide.type === SlideType.TILED_GRID && slide.gridTiles && (
          <ContentWrapper>
            <div className="text-center mb-6 md:mb-10">
              <div className="text-2xl md:text-5xl font-bold text-brand-dark mb-2">{slide.title}</div>
              <p className="text-lg md:text-xl text-gray-600">{slide.subtitle}</p>
            </div>
            {/* DÜZELTME: gap-4 yapıldı (mobilde daha sıkı), w-full garanti edildi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              {slide.gridTiles.map((tile, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} 
                  className="bg-white p-5 md:p-6 rounded-xl shadow-lg border-t-4 border-brand-yellow hover:shadow-2xl transition-shadow flex flex-col items-center text-center"
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{tile.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-2">{tile.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{tile.description}</p>
                </motion.div>
              ))}
            </div>
          </ContentWrapper>
        )}

        {/* 6. SPLIT HIGHLIGHT */}
        {slide.type === SlideType.SPLIT_HIGHLIGHT && (
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-8 gap-12">
             <div className="text-center md:w-1/3">
               <div className="text-[10rem] md:text-[12rem] font-extrabold text-brand-yellow leading-none">{slide.highlightNumber}</div>
               <div className="text-2xl md:text-4xl font-bold text-white tracking-widest">{slide.subtitle}</div>
             </div>
             <div className="md:w-1/2 text-center md:text-left">
               <div className="text-3xl md:text-5xl font-bold text-white mb-6">{slide.title}</div>
               <p className="text-xl text-gray-300 leading-relaxed">{slide.description}</p>
             </div>
          </div>
        )}

        {/* 7. CTA */}
        {slide.type === SlideType.CTA && (
           <ContentWrapper className="text-center">
              <img src={MASTER_REALTOR_LOGO} alt="Logo" className="w-40 mx-auto mb-10" />
              <div className="text-3xl md:text-6xl font-bold text-brand-yellow mb-6">{slide.title}</div>
              <p className="text-gray-300 text-lg md:text-2xl mb-12 max-w-3xl mx-auto">{slide.description}</p>
              <div className="flex flex-col gap-4 items-center">
                <a href="https://www.masterrealtor.com" target="_blank" className="text-white hover:text-brand-yellow text-xl transition-colors">www.masterrealtor.com</a>
                <a href="https://www.emlaksepette.com" target="_blank" className="text-white hover:text-brand-yellow text-xl transition-colors">www.emlaksepette.com</a>
              </div>
           </ContentWrapper>
        )}
      </motion.div>
    </AnimatePresence>
  );
};