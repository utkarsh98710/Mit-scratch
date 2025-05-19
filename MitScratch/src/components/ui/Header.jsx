import { useAnimation } from '../../contexts/AnimationContext';

export function Header() {
  const { isPlaying, togglePlay, speed, setSpeed } = useAnimation();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MitScratch Animation Tool</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <label htmlFor="speed" className="mr-2">Speed:</label>
          <input
            id="speed"
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-24"
          />
          <span className="ml-2 w-8">{speed.toFixed(1)}x</span>
        </div>
        <button
          onClick={togglePlay}
          className={`px-4 py-2 rounded font-medium ${
            isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isPlaying ? 'Stop' : 'Play'}
        </button>
      </div>
    </header>
  );
}