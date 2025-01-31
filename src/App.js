import React, { useState } from 'react';
import './App.css'; // Mengimpor CSS
const CuteCatInteractive = () => {
  const [mood, setMood] = useState('normal');
  const [clickCount, setClickCount] = useState(0);

  const catImages = {
    normal: './cat/normal.png',
    happy: './cat/image.png', 
    playful: './cat/playfull.png',
    sleepy: './cat/sleepy.png'
  };

  const handleInteract = () => {
    setClickCount(prev => prev + 1);
    
    switch (true) {
      case clickCount < 3:
        setMood('happy');
        break;
      case clickCount < 5:
        setMood('playful');
        break;
      default:
        setMood('sleepy');
        break;
    }
    
    setTimeout(() => setMood('normal'), 2000);
  };

  return (
    <div 
      className="cat-container"
      onClick={handleInteract}
    >
      <img 
        src={catImages[mood]} 
        alt="Kucing Lucu" 
        className={`cat-image ${
          mood === 'happy' ? 'scale-110 rotate-3' :
          mood === 'playful' ? 'animate-bounce' :
          mood === 'sleepy' ? 'opacity-70 grayscale' : ''
        }`}
      />
      <h2 className="cat-mood-text">
        {mood === 'normal' ? 'Ayo Main Sama Aku!' : 
         mood === 'happy' ? 'Aku Senang Banget!' : 
         mood === 'playful' ? 'Ayo Main-Main!' : 
         'Zzz... Ngantuk Nih'}
      </h2>
    </div>
  );
};

export default CuteCatInteractive;