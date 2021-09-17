interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface Action<PayloadType> {
  type: string;
  payload: PayloadType;
}

function randomInt() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

function todoChange(payload: string): Action<string> {
  return { type: 'TODO_CHANGE', payload };
}

function todoAdd(text: string): Action<Todo> {
  return {
    type: 'TODO_ADD',
    payload: {
      id: randomInt(),
      text,
      completed: false,
    },
  };
}

// Utility types
// type NewTodo = Omit<Omit<Todo, 'completed'>, 'id'>;
type NewTodo = Partial<Todo>;

const todo: NewTodo = {
  text: 'A',
};

export { todoChange, todoAdd };
