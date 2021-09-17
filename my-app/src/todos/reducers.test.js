import { inputReducer } from "./reducers";

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
  test('itemsReducers', () => {

  });
})
