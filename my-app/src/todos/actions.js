import { createAction, nanoid } from '@reduxjs/toolkit';

import { TODO_ADD, TODO_CHANGE } from './constants';

function randomInt() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

function todoChange(payload) {
  return { type: TODO_CHANGE, payload };
}

// function todoAdd(text) {
//   return {
//     type: TODO_ADD,
//     payload: {
//       id: randomInt(),
//       text,
//       completed: false,
//     },
//   };
// }

const todoAdd = createAction('TODO_ADD', (text) => {
  return {
    payload: {
      id: nanoid(),
      text,
      completed: false,
    }
  }
})

export { todoChange, todoAdd };
