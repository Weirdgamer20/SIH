import React from 'react';
import { SingingBowlIcon } from './Icons';

const AudioGuide: React.FC = () => {
  return (
    <section id="audio-guide" className="py-20" style={{ backgroundColor: 'var(--parchment)'}}>
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
            {/* FIX: The `SingingBowlIcon` component does not accept a `style` prop. The color is now applied via a Tailwind CSS class, consistent with other icon usage in the project. */}
            <SingingBowlIcon className="w-16 h-16 text-[var(--crimson)]" />
        </div>
        <h2 className="text-5xl font-display mb-4" style={{ color: 'var(--heading-brown)'}}>Immersive Audio Guide</h2>
        <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-dark)'}}>
          Enhance your virtual pilgrimage with our curated audio guides. Listen to the history of each monastery, stories of great masters, and the soothing sounds of monastic chants and Himalayan winds. Toggle the ambient sound using the button at the bottom right.
        </p>
      </div>
    </section>
  );
};

export default AudioGuide;
