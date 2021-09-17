import './TodoItem.css';

import { useMemo } from 'react';

function blockThread(delay) {
  const debut = Date.now();
  while (debut + delay > Date.now());
  return delay;
}

export default function TodoItem({ item, onDeleteItem }) {
  console.log('render Item');

  // bloquer le thread avec une fonction longue
  // blockThread(10);
  const result = useMemo(() => blockThread(10), [])


  return (
    <div className="TodoItem">
      <span>{item.text}</span>
      <button onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}
