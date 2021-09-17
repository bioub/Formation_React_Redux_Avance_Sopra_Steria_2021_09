import { inputReducer, itemsReducer } from "./reducers";

describe('todos reducers', () => {
  test('inputReducers (TODO_CHANGE action)', () => {
    const state = 'ABC';
    const action = { type: 'TODO_CHANGE', payload: 'XYZ' };

    const nextState = inputReducer(state, action);
    expect(nextState).toBe('XYZ'); // ===
    expect(nextState).not.toBe(state); // !==
  });

  test('inputReducers (UNKNOWN action)', () => {
    const state = 'ABC';
    const action = { type: 'UNKNOWN', payload: 'XYZ' };

    const nextState = inputReducer(state, action);
    expect(nextState).toBe(state); // ===
  });

  // Exercice tester les 3 cas possible de itemsReducer (TODO_ADD, TODO_DELETE, UNKNOWN)
  test('itemsReducers (TODO_ADD action)', () => {
    const state = [{id: '123', text: 'ABC'}, {id: '789', text: 'XYZ'}];
    const action = { type: 'TODO_ADD', payload: {id: '333', text: 'GHI'} };

    const nextState = itemsReducer(state, action);
    expect(nextState).toEqual([{id: '123', text: 'ABC'}, {id: '789', text: 'XYZ'}, {id: '333', text: 'GHI'}])
    expect(nextState).not.toBe(state); // !== (immuabilité)
  });
})
