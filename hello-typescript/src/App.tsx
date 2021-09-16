import './App.css';

import { useState } from 'react';

import CounterControlled from './CounterControlled';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CounterControlled count={count} onIncrement={() => setCount(count + 1)} />
      <CounterControlled count={count} onIncrement={() => setCount(count + 1)} />
      <CounterControlled count={count} onIncrement={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
