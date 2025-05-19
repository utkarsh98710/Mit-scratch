export function RepeatBlock({ onAdd }) {
  const [count, setCount] = useState(2);

  const handleAdd = () => {
    onAdd({
      type: 'repeat',
      count,
      id: Date.now()
    });
    setCount(2);
  };

  return (
    <div className="bg-yellow-100 p-3 rounded mb-3">
      <h3 className="font-medium mb-2">Repeat</h3>
      <div className="flex items-center">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          min="1"
          className="w-16 p-1 border rounded mr-2"
        />
        <span>times</span>
      </div>
      <button
        onClick={handleAdd}
        className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded text-sm"
      >
        Add Block
      </button>
    </div>
  );
}

export function WaitBlock({ onAdd }) {
  const [seconds, setSeconds] = useState(1);

  const handleAdd = () => {
    onAdd({
      type: 'wait',
      seconds,
      id: Date.now()
    });
    setSeconds(1);
  };

  return (
    <div className="bg-yellow-100 p-3 rounded mb-3">
      <h3 className="font-medium mb-2">Wait</h3>
      <div className="flex items-center">
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          min="0.1"
          step="0.1"
          className="w-16 p-1 border rounded mr-2"
        />
        <span>seconds</span>
      </div>
      <button
        onClick={handleAdd}
        className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded text-sm"
      >
        Add Block
      </button>
    </div>
  );
}