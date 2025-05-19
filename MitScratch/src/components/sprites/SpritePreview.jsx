// src/components/sprites/SpritePreview.jsx
export function SpritePreview({ sprite }) {
  return (
    <div
      className="absolute transition-all duration-200 ease-in-out"
      style={{
        left: `${sprite.x}px`,
        top: `${sprite.y}px`,
        transform: `rotate(${sprite.rotation}deg) scale(${sprite.size / 100})`,
        opacity: sprite.isVisible ? 1 : 0.5
      }}
    >
      <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
        <span className="text-xs text-white font-bold">
          {sprite.name.replace('Sprite', '')}
        </span>
      </div>
    </div>
  );
}