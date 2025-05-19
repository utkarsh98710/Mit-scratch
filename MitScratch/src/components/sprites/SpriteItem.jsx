export function SpriteItem({ sprite, isActive, onClick, onRemove }) {
  return (
    <div
      className={`flex items-center justify-between p-2 mb-2 rounded cursor-pointer ${
        isActive ? 'bg-blue-100 border-blue-500 border-2' : 'bg-gray-100 hover:bg-gray-200'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div 
          className="w-8 h-8 rounded-full bg-blue-400 mr-2 flex items-center justify-center"
          style={{
            opacity: sprite.isVisible ? 1 : 0.5,
            transform: `scale(${sprite.size / 100})`
          }}
        >
          <span className="text-xs text-white font-bold">
            {sprite.name.replace('Sprite', '')}
          </span>
        </div>
        <span>{sprite.name}</span>
      </div>
      {!isActive && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onRemove(sprite.id);
          }}
          className="text-red-500 hover:text-red-700"
        >
          ×
        </button>
      )}
    </div>
  );
}