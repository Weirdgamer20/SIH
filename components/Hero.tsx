import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600962800694-013e86a4f665?q=80&w=1920&auto=format&fit=crop')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--crimson)]/70 to-[var(--saffron)]/60"></div>
      <div className="relative text-center px-4 z-10" style={{ color: 'var(--cream)'}}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold drop-shadow-lg">
          Monastery360
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light max-w-3xl mx-auto drop-shadow-md">
          A Digital Pilgrimage Through Sikkim’s Sacred Monasteries
        </p>
        <p className="mt-2 text-md md:text-xl font-body italic drop-shadow-sm" style={{ color: 'var(--saffron)'}}>
          Preserving Spiritual Heritage Through Technology
        </p>
        <a 
          href="#monasteries"
          className="mt-8 inline-block bg-[var(--saffron)] text-[var(--heading-brown)] font-bold font-body py-3 px-8 rounded-full text-lg uppercase tracking-wider btn-glow btn-hover-zoom hover:bg-[var(--crimson-dark)] hover:text-[var(--cream)]"
        >
          Begin Your Journey
        </a>
      </div>
    </section>
  );
};

export default Hero;