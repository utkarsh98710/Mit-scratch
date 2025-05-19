import { useEffect } from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import { detectCollision, handleCollision } from '../utils/collisionHelpers';

export function CollisionDetector({ sprites, updateSprite }) {
  const { isPlaying, collisionsEnabled } = useAnimation();

  useEffect(() => {
    if (!isPlaying || !collisionsEnabled || sprites.length < 2) return;

    // Check all pairs of sprites for collisions
    for (let i = 0; i < sprites.length; i++) {
      for (let j = i + 1; j < sprites.length; j++) {
        const sprite1 = sprites[i];
        const sprite2 = sprites[j];
        
        if (detectCollision(sprite1, sprite2)) {
          const { sprite1: updated1, sprite2: updated2 } = handleCollision(sprite1, sprite2);
          updateSprite(sprite1.id, { animations: updated2.animations });
          updateSprite(sprite2.id, { animations: updated1.animations });
        }
      }
    }
  }, [sprites, isPlaying, collisionsEnabled, updateSprite]);

  return null;
}