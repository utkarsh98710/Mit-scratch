export function MoveStepsBlock({ onAdd }) {
  const [steps, setSteps] = useState(10);

  const handleAdd = () => {
    onAdd({
      type: 'move',
      steps,
      id: Date.now()
    });
    setSteps(10); // Reset to default
  };

  return (
    <div className="bg-blue-100 p-3 rounded mb-3">
      <h3 className="font-medium mb-2">Move Steps</h3>
      <div className="flex items-center">
        <input
          type="number"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
          className="w-16 p-1 border rounded mr-2"
        />
        <span>steps</span>
      </div>
      <button
        onClick={handleAdd}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm"
      >
        Add Block
      </button>
    </div>
  );
}

export function RotateBlock({ onAdd }) {
  const [degrees, setDegrees] = useState(15);

  const handleAdd = () => {
    onAdd({
      type: 'rotate',
      degrees,
      id: Date.now()
    });
    setDegrees(15); // Reset to default
  };

  return (
    <div className="bg-blue-100 p-3 rounded mb-3">
      <h3 className="font-medium mb-2">Rotate</h3>
      <div className="flex items-center">
        <input
          type="number"
          value={degrees}
          onChange={(e) => setDegrees(Number(e.target.value))}
          className="w-16 p-1 border rounded mr-2"
        />
        <span>degrees</span>
      </div>
      <button
        onClick={handleAdd}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm"
      >
        Add Block
      </button>
    </div>
  );
}

export function GoToBlock({ onAdd }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleAdd = () => {
    onAdd({
      type: 'goTo',
      x,
      y,
      id: Date.now()
    });
    setX(0);
    setY(0);
  };

  return (
    <div className="bg-blue-100 p-3 rounded mb-3">
      <h3 className="font-medium mb-2">Go To Position</h3>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm">X:</label>
          <input
            type="number"
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
            className="w-full p-1 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Y:</label>
          <input
            type="number"
            value={y}
            onChange={(e) => setY(Number(e.target.value))}
            className="w-full p-1 border rounded"
          />
        </div>
      </div>
      <button
        onClick={handleAdd}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm"
      >
        Add Block
      </button>
    </div>
  );
}