import React from 'react';

const Header: React.FC = () => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-40 shadow-md backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(215, 38, 56, 0.85)' }} // crimson with blur
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold" style={{ color: 'var(--cream)' }}>Monastery360</h1>
        <ul className="hidden md:flex space-x-8 items-center font-semibold text-lg" style={{ color: 'rgba(253, 246, 227, 0.9)'}}>
          <li><a href="#monasteries" className="hover:text-[var(--saffron)] transition-colors duration-300">Monasteries</a></li>
          <li><a href="#festivals" className="hover:text-[var(--saffron)] transition-colors duration-300">Festivals</a></li>
          <li><a href="#audio-guide" className="hover:text-[var(--saffron)] transition-colors duration-300">Audio Guide</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;