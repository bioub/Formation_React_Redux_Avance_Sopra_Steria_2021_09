import './TodoForm.css';

// import { Component } from 'react';
import { useEffect, useRef } from 'react';

export default function TodoForm({
  newTodoInput,
  onNewTodoChange,
  onNewTodoAdd,
}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // useEffect(() => {
  //   console.log('componentDidMount');
  //   return () => {
  //     console.log('componentWillUnmount');
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate');
  //   return () => {
  //     console.log('componentWillUpdate + componentWillUnmount');
  //   };
  // });

  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate (si newTodoInput change)');
  //   return () => {
  //     console.log('componentWillUpdate (si newTodoInput change) + componentWillUnmount');
  //   };
  // }, [newTodoInput]);

  function handleSubmit(event) {
    event.preventDefault();
    onNewTodoAdd(newTodoInput);
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={newTodoInput}
        onChange={(event) => onNewTodoChange(event.target.value)}
      />
      <button>+</button>
    </form>
  );
}

// export default class TodoForm extends Component {
//   inputRef = createRef();

//   handleSubmit = (event) => {
//     const { newTodoInput, onNewTodoAdd } = this.props;

//     event.preventDefault();
//     onNewTodoAdd(newTodoInput);
//   };

//   componentDidMount() {
//     /** @type {HTMLInputElement} */
//     const inputEl = this.inputRef.current;
//     inputEl.focus();
//   }

//   render() {
//     const { newTodoInput, onNewTodoChange } = this.props;

//     return (
//       <form className="TodoForm" onSubmit={this.handleSubmit}>
//         <input
//           ref={this.inputRef}
//           value={newTodoInput}
//           onChange={(event) => onNewTodoChange(event.target.value)}
//         />
//         <button>+</button>
//       </form>
//     );
//   }
// }


