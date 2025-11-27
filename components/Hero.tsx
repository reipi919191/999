
import React from 'react';
import { PageRoute } from '../types';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-osaka-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-70">
        <img 
          src="https://images.unsplash.com/photo-1590559899731-a3828395a49a?q=80&w=2070&auto=format&fit=crop" 
          alt="Osaka Dotonbori" 
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-4xl">
          <p className="text-osaka-red font-bold tracking-[0.3em] text-xs md:text-sm mb-6 animate-fade-in-up">
            FREELANCE INFLUENCER / GUIDE
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8 animate-fade-in-up [animation-delay:200ms]">
            OSAKA<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">IS YOUR</span><br />
            STAGE<span className="text-osaka-red">.</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-lg leading-loose font-jp font-medium animate-fade-in-up [animation-delay:400ms]">
            食と、街と、エンターテインメント。<br />
            大阪の「熱狂」を、世界基準のクリエイティブで切り取る。<br />
            この街のすべてが、私のスタジオです。
          </p>

          <div className="mt-12 flex gap-6 animate-fade-in-up [animation-delay:600ms]">
             <a href={`#/${PageRoute.PORTFOLIO}`} className="bg-white text-osaka-black px-8 py-4 rounded-full font-bold text-xs tracking-widest hover:bg-osaka-red hover:text-white transition-colors">
                VIEW WORKS
             </a>
             <a href={`#/${PageRoute.ABOUT}`} className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-xs tracking-widest hover:bg-white hover:text-osaka-black transition-colors">
                ABOUT ME
             </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-6 md:right-12 flex items-center gap-4 text-white/60 animate-fade-in-up [animation-delay:800ms]">
        <span className="text-[10px] tracking-widest font-bold rotate-90 origin-right translate-x-2">SCROLL</span>
        <div className="w-[1px] h-24 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-slide-down"></div>
        </div>
      </div>
    </section>
  );
};
