import React from 'react';

const MonasterySilhouette: React.FC = () => (
    <svg className="h-20 text-[var(--cream)]/30" viewBox="0 0 200 100" fill="currentColor">
        <path opacity="0.6" d="M-10 100 L15 75 L20 78 L25 70 L35 80 L45 65 L55 75 L65 85 L75 80 L85 90 L95 75 L105 85 L115 70 L125 80 L135 65 L145 85 L155 75 L165 80 L170 75 L175 85 L185 80 L210 100 Z" />
        <path d="M-5 100 L20 80 L25 82 L30 75 L40 85 L50 70 L60 80 L70 90 L80 85 L90 95 L100 80 L110 90 L120 75 L130 85 L140 70 L150 90 L160 80 L170 85 L175 80 L180 90 L190 85 L205 100 Z" />
        <path d="M95 80 L95 50 L105 50 L105 80 Z" />
        <path d="M90 50 L110 50 L100 40 Z" />
    </svg>
);

const PrayerFlag: React.FC = () => (
  <svg className="w-8 h-10 flag-flutter" viewBox="0 0 30 40">
    <path d="M0 0 H30 V20 H0 Z" fill="var(--saffron)" />
    <path d="M0 22 H30 V24 H0 Z" fill="var(--crimson)" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: 'var(--heading-brown)', color: 'var(--parchment)'}}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <MonasterySilhouette />
            <div className="flex items-start gap-1">
                <PrayerFlag />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-8 md:mt-0 text-lg">
            <a href="#" className="hover:text-[var(--saffron)] transition-colors">About</a>
            <a href="#" className="hover:text-[var(--saffron)] transition-colors">Contact</a>
            <a href="#" className="hover:text-[var(--saffron)] transition-colors">Cultural Preservation</a>
            <a href="#" className="hover:text-[var(--saffron)] transition-colors">Terms</a>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-[var(--cream)]/20 pt-6">
          <p>&copy; {new Date().getFullYear()} Monastery360. A journey into the heart of Sikkim.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;