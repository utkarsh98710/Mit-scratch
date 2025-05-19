// src/components/panels/PreviewPanel.jsx
import { useAnimation } from '../../contexts/AnimationContext';
import { SpritePreview } from '../sprites/SpritePreview';

export function PreviewPanel({ sprites }) { 
  const { collisionsEnabled } = useAnimation();

  return (
    <div className="w-80 bg-gray-200 p-4 overflow-y-auto">
      <h2 className="font-semibold mb-4">Preview</h2>
      <div className="bg-white rounded-lg border border-gray-300 h-64 relative overflow-hidden">
        {sprites.map(sprite => (
          <SpritePreview key={sprite.id} sprite={sprite} />
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="collisions"
          checked={collisionsEnabled}
          onChange={() => {}}
          className="mr-2"
        />
        <label htmlFor="collisions">Enable Collisions</label>
      </div>
    </div>
  );
}