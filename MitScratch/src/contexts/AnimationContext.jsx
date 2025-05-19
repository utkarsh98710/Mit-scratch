// src/contexts/AnimationContext.jsx
import { createContext, useContext, useState } from 'react';

const AnimationContext = createContext();

// 1. Make sure this is exported
export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }
  return context;
}

// 2. This should be the default export
export  function AnimationProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <AnimationContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </AnimationContext.Provider>
  );
}