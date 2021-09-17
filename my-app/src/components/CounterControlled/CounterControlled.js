import { func, number } from 'prop-types'

/**
 *
 * @param {object} props
 * @param {number} props.count La valeur du bouton
 * @param {Function} props.onIncrement
 * @returns
 */
function CounterControlled(props) {
  return (
    <div className="CounterControlled">
      <button onClick={() => props.onIncrement()}>{props.count}</button>
    </div>
  );
}

CounterControlled.propTypes = {
  count: number.isRequired,
  onIncrement: func.isRequired,
}

export default CounterControlled;
