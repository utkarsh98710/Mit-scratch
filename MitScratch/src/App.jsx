import AnimationProvider from './contexts/AnimationContext';
import { useSprites } from './hooks/useSprites';
import { Header } from './components/ui/Header';
import { Sidebar } from './components/ui/Sidebar';
import { WorkspacePanel } from './components/panels/WorkspacePanel';
import  {PreviewPanel}  from './components/panels/PreviewPanel';
import { SpriteItem } from './components/sprites/SpriteItem';
import { CollisionDetector } from './components/CollisionDetector';  // Fixed path
import { useAnimation } from './contexts/AnimationContext';
import { useEffect, useRef } from 'react';
import { executeAnimation, getNextAnimationIndex } from "./utils/animationHelpers";
function AppContent() {
  const { sprites, activeSpriteId, addSprite, updateSprite, removeSprite, setActiveSpriteId } = useSprites();
  const { isPlaying, speed } = useAnimation();
  const animationRef = useRef();
  const lastTimeRef = useRef(0);

  const activeSprite = sprites.find(sprite => sprite.id === activeSpriteId) || sprites[0];

  const handleAddAnimation = (animation) => {
    updateSprite(activeSpriteId, {
      animations: [...activeSprite.animations, animation]
    });
  };

  const animate = (timestamp) => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = timestamp;
    }
    
    const deltaTime = timestamp - lastTimeRef.current;
    if (deltaTime > (1000 / (10 * speed))) {
      sprites.forEach(sprite => {
        if (sprite.animations.length > 0) {
          const animation = sprite.animations[sprite.currentAnimationIndex];
          executeAnimation(sprite, animation, updateSprite);
          
          updateSprite(sprite.id, {
            currentAnimationIndex: getNextAnimationIndex(sprite)
          });
        }
      });
      
      lastTimeRef.current = timestamp;
    }
    
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationRef.current);
      lastTimeRef.current = 0;
    }
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, speed, sprites]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar>
          <button 
            onClick={addSprite}
            className="w-full bg-green-500 text-white py-2 rounded mb-4 font-medium"
          >
            + Add Sprite
          </button>
          <div className="space-y-2">
            {sprites.map(sprite => (
              <SpriteItem
                key={sprite.id}
                sprite={sprite}
                isActive={sprite.id === activeSpriteId}
                onClick={() => setActiveSpriteId(sprite.id)}
                onRemove={removeSprite}
              />
            ))}
          </div>
        </Sidebar>
        <WorkspacePanel 
          activeSprite={activeSprite} 
          onAddAnimation={handleAddAnimation} 
        />
        <PreviewPanel sprites={sprites} />
      </div>
      <CollisionDetector sprites={sprites} updateSprite={updateSprite} />
    </div>
  );
}

export default function App() {
  return (
    <AnimationProvider>  {/* Now properly wrapping the content */}
      <AppContent />
    </AnimationProvider>
  );
}