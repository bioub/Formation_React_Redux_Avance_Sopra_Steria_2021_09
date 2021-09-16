function CounterControlled({ count, onIncrement }) {
  return (
    <div className="CounterControlled">
      <button onClick={() => onIncrement()}>{count}</button>
    </div>
  );
}

export default CounterControlled;
