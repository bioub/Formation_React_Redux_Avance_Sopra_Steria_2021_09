import './TodoForm.css';

import { Component } from 'react';
import { createRef } from 'react';

// export default function TodoForm({
//   newTodoInput,
//   onNewTodoChange,
//   onNewTodoAdd,
// }) {
//   function handleSubmit(event) {
//     event.preventDefault();
//     onNewTodoAdd(newTodoInput);
//   }
//   return (
//     <form className="TodoForm" onSubmit={handleSubmit}>
//       <input
//         value={newTodoInput}
//         onChange={(event) => onNewTodoChange(event.target.value)}
//       />
//       <button>+</button>
//     </form>
//   );
// }

export default class TodoForm extends Component {
  inputRef = createRef();

  handleSubmit = (event) => {
    const { newTodoInput, onNewTodoAdd } = this.props;

    event.preventDefault();
    onNewTodoAdd(newTodoInput);
  };

  componentDidMount() {
    /** @type {HTMLInputElement} */
    const inputEl = this.inputRef.current;
    inputEl.focus();
  }

  render() {
    const { newTodoInput, onNewTodoChange } = this.props;

    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          value={newTodoInput}
          onChange={(event) => onNewTodoChange(event.target.value)}
        />
        <button>+</button>
      </form>
    );
  }
}
