export function SayBlock({ onAdd }) {
  const [message, setMessage] = useState('');
  const [duration, setDuration] = useState(2);

  const handleAdd = () => {
    if (!message.trim()) return;
    
    onAdd({
      type: 'say',
      message,
      duration,
      id: Date.now()
    });
    setMessage('');
    setDuration(2);
  };

  return (
    <div className="bg-purple-100 p-3 rounded mb-3">
      <h3 className="font-medium mb-2">Say Message</h3>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
        className="w-full p-1 border rounded mb-2"
      />
      <div className="flex items-center">
        <span className="mr-2">for</span>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-16 p-1 border rounded"
          min="0.1"
          step="0.1"
        />
        <span className="ml-2">seconds</span>
      </div>
      <button
        onClick={handleAdd}
        className="mt-2 bg-purple-500 text-white px-3 py-1 rounded text-sm"
      >
        Add Block
      </button>
    </div>
  );
}

export function ThinkBlock({ onAdd }) {
  const [message, setMessage] = useState('');
  const [duration, setDuration] = useState(2);

  const handleAdd = () => {
    if (!message.trim()) return;
    
    onAdd({
      type: 'think',
      message,
      duration,
      id: Date.now()
    });
    setMessage('');
    setDuration(2);
  };

  return (
    <div className="bg-purple-100 p-3 rounded mb-3">
      <h3 className="font-medium mb-2">Think Message</h3>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter thought"
        className="w-full p-1 border rounded mb-2"
      />
      <div className="flex items-center">
        <span className="mr-2">for</span>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-16 p-1 border rounded"
          min="0.1"
          step="0.1"
        />
        <span className="ml-2">seconds</span>
      </div>
      <button
        onClick={handleAdd}
        className="mt-2 bg-purple-500 text-white px-3 py-1 rounded text-sm"
      >
        Add Block
      </button>
    </div>
  );
}