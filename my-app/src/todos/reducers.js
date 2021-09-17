import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { todoAdd, todoChange, todoDelete } from './actions';

const inputReducer = createReducer('', {
  [todoChange]: (previousState, { payload }) => payload,
});

const itemsReducer = createReducer([], {
  [todoAdd]: (previousState, { payload }) => [...previousState, payload],
  [todoDelete]: (previousState, { payload }) => previousState.filter((t) => t.id !== payload.id),
});

const todosReducer = combineReducers({
  input: inputReducer,
  items: itemsReducer,
});

export { inputReducer, itemsReducer, todosReducer };
