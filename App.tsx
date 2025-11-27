
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { AiConcierge } from './components/AiConcierge';
import { PageRoute } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>(PageRoute.HOME);

  useEffect(() => {
    // Basic hash router implementation
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      // Handle empty hash as Home
      setCurrentPage(hash || PageRoute.HOME);
      window.scrollTo(0, 0);
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case PageRoute.ABOUT:
        return <About />;
      case PageRoute.SERVICES:
        return <Services />;
      case PageRoute.PORTFOLIO:
        return <Portfolio />;
      case PageRoute.CONTACT:
        return <Contact />;
      case PageRoute.HOME:
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <AiConcierge />
    </div>
  );
};

export default App;
