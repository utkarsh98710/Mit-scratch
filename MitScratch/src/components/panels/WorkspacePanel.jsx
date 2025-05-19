import { useState } from 'react';
import { 
  MoveStepsBlock, 
  RotateBlock, 
  GoToBlock 
} from '../blocks/MotionBlocks';
import { 
  SayBlock, 
  ThinkBlock 
} from '../blocks/LooksBlocks';
import { 
  RepeatBlock, 
  WaitBlock 
} from '../blocks/ControlBlocks';

export function WorkspacePanel({ activeSprite, onAddAnimation }) {
  const [activeTab, setActiveTab] = useState('motion');

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'motion' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('motion')}
        >
          Motion
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'looks' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('looks')}
        >
          Looks
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'control' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('control')}
        >
          Control
        </button>
      </div>

      {activeTab === 'motion' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MoveStepsBlock onAdd={onAddAnimation} />
          <RotateBlock onAdd={onAddAnimation} />
          <GoToBlock onAdd={onAddAnimation} />
        </div>
      )}

      {activeTab === 'looks' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SayBlock onAdd={onAddAnimation} />
          <ThinkBlock onAdd={onAddAnimation} />
        </div>
      )}

      {activeTab === 'control' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RepeatBlock onAdd={onAddAnimation} />
          <WaitBlock onAdd={onAddAnimation} />
        </div>
      )}
    </div>
  );
}