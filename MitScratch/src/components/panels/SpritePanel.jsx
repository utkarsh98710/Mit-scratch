import { useSprites } from '../../hooks/useSprites';
import { useAnimation } from '../../contexts/AnimationContext';
import { SpriteItem } from './SpriteItem';

export function SpritePanel() {
  const { sprites, addSprite, removeSprite, setActiveSpriteId } = useSprites();
  const { activeSpriteId } = useAnimation();

  return (
    <div className="w-64 bg-gray-200 p-4 overflow-y-auto">
      <h2 className="font-semibold mb-4">Sprites</h2>
      <button
        onClick={addSprite}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mb-4 transition-colors"
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
    </div>
  );
}