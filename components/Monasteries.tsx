import React, { useEffect, useRef, useState } from 'react';
import { MONASTERIES } from '../constants';
import type { Monastery } from '../types';
import { PrayerWheelIcon, StupaIcon } from './Icons';

// Card component defined outside to prevent re-creation on re-renders
interface MonasteryCardProps {
  monastery: Monastery;
  isVisible: boolean;
}

const MonasteryCard: React.FC<MonasteryCardProps> = ({ monastery, isVisible }) => {
  const handleView3DClick = () => {
    alert(`Downloading photogrammetry for ${monastery.name}...\n(This is a placeholder action)`);
  };
  
  return (
    <div
      className={`bg-[var(--parchment)] rounded-lg shadow-lg overflow-hidden border-2 border-[var(--saffron)] transform transition-all duration-700 ease-out group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <img src={monastery.image} alt={monastery.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="p-6">
        <h3 className="flex items-center gap-3 text-3xl font-display text-[var(--heading-brown)] mb-2">
            <StupaIcon className="w-6 h-6 text-[var(--saffron)]" />
            {monastery.name}
        </h3>
        <p className="font-semibold text-sm text-[var(--crimson)] mb-1">Founded: {monastery.founded}</p>
        <p className="text-sm text-[var(--text-dark)]/90 mb-4">{monastery.significance}</p>
        <p className="text-xs text-[var(--text-dark)]/70 italic">{monastery.location}</p>
        <div className="mt-6 text-right">
          <button
            onClick={handleView3DClick}
            className="inline-flex items-center gap-2 bg-[var(--saffron)] text-[var(--heading-brown)] font-bold py-2 px-4 rounded-full btn-glow btn-hover-zoom hover:bg-[var(--crimson-dark)] hover:text-[var(--cream)] focus:outline-none focus:ring-2 ring-offset-2 ring-[var(--saffron)]"
          >
            <PrayerWheelIcon className="w-6 h-6 transition-transform duration-500 group-hover:animate-spin" />
            <span className="text-sm">View 3D</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Monasteries: React.FC = () => {
  const [visibleMonasteries, setVisibleMonasteries] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0', 10);
            setVisibleMonasteries((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-[var(--parchment)] mandala-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-display text-center text-[var(--heading-brown)] mb-4">Sacred Sanctuaries</h2>
        <p className="text-center text-lg text-[var(--text-dark)]/80 max-w-3xl mx-auto mb-12">
          Explore the serene and spiritual monasteries of Sikkim, each with its unique history and cultural significance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {MONASTERIES.map((monastery, index) => (
            <div 
              key={monastery.id} 
              // FIX: The ref callback was implicitly returning a value, causing a type error. Wrapping the assignment in a block body `{}` ensures the function returns `void` as expected.
              ref={el => { refs.current[index] = el; }}
              data-id={monastery.id}
            >
              <MonasteryCard monastery={monastery} isVisible={visibleMonasteries.has(monastery.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Monasteries;