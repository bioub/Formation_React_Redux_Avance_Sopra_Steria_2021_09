import { createAction, nanoid } from '@reduxjs/toolkit';

const todoChange = createAction('TODO_CHANGE');

const todoAdd = createAction('TODO_ADD', (text) => {
  return {
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
});

const todoDelete = createAction('TODO_DELETE');

export { todoChange, todoAdd, todoDelete };
