import './TodoItem.css';

import { useMemo } from 'react';

function blockThread(delay) {
  const debut = Date.now();
  while (debut + delay > Date.now());
}

export default function TodoItem({ item, onDeleteItem }) {
  console.log('render Item');

  // bloquer le thread avec une fonction longue
  blockThread();
  // const memoBlockThread = useMemo(blockThread)

  return (
    <div className="TodoItem">
      <span>{item.text}</span>
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}
