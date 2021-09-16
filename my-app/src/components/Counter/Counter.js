import { Component, useState } from 'react';

// class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   handleClick = () => {
//     const { count } = this.state;
//     this.setState({
//       count: count + 1,
//     });
//   };

//   render() {
//     const { count } = this.state;
//     return <button onClick={this.handleClick}>{count}</button>;
//   }
// }


  // const tmp = useState(0);
  // const count = tmp[0];
  // const setCount = tmp[1];

// state = {
//   count: 10,
//   step: 2,
// };

// state = [10, 2];

function Counter() {
  const [count, setCount] = useState(10); // state[0]
  const [step, setStep] = useState(2); // state[1]

  const handleClick = () => {
    setCount(count + step);
  };
  return <div className="Counter">
    <button onClick={handleClick}>{count}</button>
    <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
  </div>;
}

export default Counter;
