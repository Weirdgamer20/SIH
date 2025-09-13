import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Monasteries from './components/Monasteries';
import Festivals from './components/Festivals';
import AudioGuide from './components/AudioGuide';
import Footer from './components/Footer';
import { SoundOnIcon, SoundOffIcon } from './components/Icons';

const App: React.FC = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // A placeholder audio file URL
  const audioSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Audio play failed:", error));
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  return (
    <div className="relative" style={{ backgroundColor: 'var(--parchment)'}}>
      <Header />
      <main>
        <Hero />
        <div id="monasteries" className="pt-20">
          <Monasteries />
        </div>
        <Festivals />
        <AudioGuide />
      </main>
      <Footer />
      <audio ref={audioRef} src={audioSrc} loop />
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 bg-[var(--saffron)] hover:bg-[var(--crimson)] text-[var(--heading-brown)] hover:text-[var(--cream)] p-3 rounded-full shadow-lg z-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--saffron)]"
        aria-label={isAudioPlaying ? 'Pause ambient sound' : 'Play ambient sound'}
      >
        {isAudioPlaying ? <SoundOnIcon /> : <SoundOffIcon />}
      </button>
    </div>
  );
};

export default App;