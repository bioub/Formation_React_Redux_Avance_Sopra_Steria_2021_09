interface Props {
  count: number;
  onIncrement: () => void,
}

function CounterControlled(props: Props) {
  return (
    <div className="CounterControlled">
      <button onClick={() => props.onIncrement()}>{props.count}</button>
    </div>
  );
}

export default CounterControlled;
