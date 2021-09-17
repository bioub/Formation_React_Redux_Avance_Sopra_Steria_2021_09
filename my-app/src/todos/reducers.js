import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { todoAdd } from './actions';
import { TODO_ADD, TODO_CHANGE } from './constants';

function inputReducer(previousState = '', { type, payload }) {
  switch (type) {
    case TODO_CHANGE:
      return payload;
    default:
      return previousState;
  }
}

// function itemsReducer(previousState = [], { type, payload }) {
//   switch (type) {
//     case TODO_ADD:
//       return [...previousState, payload];
//     default:
//       return previousState;
//   }
// }

const itemsReducer = createReducer([], {
  [todoAdd]: (previousState, { payload }) => [...previousState, payload]
})

const todosReducer = combineReducers({
  input: inputReducer,
  items: itemsReducer,
});

export { inputReducer, itemsReducer, todosReducer };
