
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-osaka-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <div className="text-3xl font-black tracking-tighter mb-6">OSAKA VIBES<span className="text-osaka-red">.</span></div>
        
        <div className="flex justify-center gap-8 mb-10 text-xs font-bold tracking-widest text-gray-400">
            <a href="#/" className="hover:text-white transition-colors">HOME</a>
            <a href="#/about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#/services" className="hover:text-white transition-colors">SERVICES</a>
            <a href="#/contact" className="hover:text-white transition-colors">CONTACT</a>
        </div>

        <p className="text-gray-500 text-xs mb-8 leading-relaxed font-jp">
          © {new Date().getFullYear()} Osaka Vibes. All rights reserved. <br />
          Designed for the love of Osaka.
        </p>
        
        <div className="flex justify-center gap-6 text-[10px] uppercase tracking-widest">
          <a href="#" className="text-gray-600 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
