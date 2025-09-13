import React from 'react';
import { FESTIVALS } from '../constants';

const Festivals: React.FC = () => {
  return (
    <section id="festivals" className="py-20" style={{ backgroundColor: 'var(--crimson)', color: 'var(--cream)'}}>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-display text-center mb-4" style={{ color: 'var(--saffron)'}}>Festival Calendar</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12" style={{ color: 'var(--parchment)' }}>
          Experience the vibrant spiritual traditions of Sikkim through its colorful monastic festivals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FESTIVALS.map(festival => (
            <div key={festival.id} className="bg-white/10 p-6 rounded-lg border-2 border-[var(--border-beige)]/50 shadow-lg hover:border-[var(--saffron)] transition-all duration-300">
              <h3 className="text-2xl font-display mb-2" style={{ color: 'var(--saffron)'}}>{festival.name}</h3>
              <p className="font-bold text-sm mb-3" style={{ color: 'var(--cream)'}}>{festival.date}</p>
              <p className="text-sm mb-4" style={{ color: 'var(--parchment)'}}>{festival.description}</p>
              <p className="text-xs font-semibold tracking-wider uppercase text-[var(--saffron)]/80">{festival.monastery}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Festivals;