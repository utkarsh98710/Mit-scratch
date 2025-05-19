import { useState } from 'react';

export function useSprites(initialSprites = []) {
  const [sprites, setSprites] = useState(initialSprites);
  const [activeSpriteId, setActiveSpriteId] = useState(initialSprites[0]?.id || null);

  const addSprite = () => {
    const newId = sprites.length > 0 ? Math.max(...sprites.map(s => s.id)) + 1 : 1;
    const newSprite = {
      id: newId,
      name: `Sprite${newId}`,
      x: 100,
      y: 100,
      rotation: 0,
      size: 100,
      isVisible: true,
      animations: []
    };
    
    setSprites(prev => [...prev, newSprite]);
    setActiveSpriteId(newId);
    return newSprite;
  };

  const updateSprite = (id, updates) => {
    setSprites(prev => 
      prev.map(sprite => 
        sprite.id === id ? { ...sprite, ...updates } : sprite
      )
    );
  };

  const removeSprite = (id) => {
    setSprites(prev => prev.filter(sprite => sprite.id !== id));
    if (activeSpriteId === id) {
      setActiveSpriteId(sprites[0]?.id || null);
    }
  };

  return { 
    sprites, 
    activeSpriteId, 
    addSprite, 
    updateSprite, 
    removeSprite,
    setActiveSpriteId 
  };
}