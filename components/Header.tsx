
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { NavItem, PageRoute } from '../types';

const navItems: NavItem[] = [
  { label: 'ABOUT', path: PageRoute.ABOUT },
  { label: 'SERVICES', path: PageRoute.SERVICES },
  { label: 'PORTFOLIO', path: PageRoute.PORTFOLIO },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleHashChange = () => {
        setCurrentHash(window.location.hash.replace('#/', ''));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    handleHashChange();

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = currentHash === path;
    const baseClass = "text-xs font-bold tracking-[0.2em] transition-colors relative group ";
    const colorClass = scrolled ? (isActive ? 'text-osaka-red' : 'text-osaka-black') : (isActive ? 'text-osaka-red' : 'text-white/90');
    return baseClass + colorClass;
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#/" className={`relative z-50 font-black text-2xl tracking-tighter mix-blend-difference ${isOpen ? 'text-osaka-black' : (scrolled ? 'text-osaka-black' : 'text-white')}`}>
          OSAKA VIBES<span className="text-osaka-red">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={`#/${item.path}`}
              className={getLinkClass(item.path)}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-osaka-red transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${currentHash === item.path ? 'scale-x-100' : ''}`}></span>
            </a>
          ))}
          <a 
            href={`#/${PageRoute.CONTACT}`}
            className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all duration-300 flex items-center gap-2 ${
              scrolled 
                ? 'bg-osaka-black text-white hover:bg-osaka-red' 
                : 'bg-white text-osaka-black hover:bg-osaka-red hover:text-white'
            }`}
          >
            CONTACT <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden relative z-50 focus:outline-none transition-colors ${isOpen ? 'text-osaka-black' : (scrolled ? 'text-osaka-black' : 'text-white')}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-all duration-500 flex flex-col justify-center items-center gap-8 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <a 
            href="#/"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black text-osaka-black hover:text-osaka-red tracking-tighter"
        >
            HOME
        </a>
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={`#/${item.path}`}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black text-osaka-black hover:text-osaka-red tracking-tighter"
          >
            {item.label}
          </a>
        ))}
        <a 
          href={`#/${PageRoute.CONTACT}`} 
          onClick={() => setIsOpen(false)}
          className="text-4xl font-black text-osaka-red tracking-tighter mt-4"
        >
          CONTACT
        </a>

        <div className="flex gap-6 mt-12">
           <a href="#" className="text-gray-400 hover:text-osaka-black transition-colors"><Instagram size={24} /></a>
           <a href="#" className="text-gray-400 hover:text-osaka-black transition-colors"><Youtube size={24} /></a>
        </div>
      </div>
    </header>
  );
};
