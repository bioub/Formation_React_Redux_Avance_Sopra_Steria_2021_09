const { createStore } = require('redux');

const initialState = {
  count: 10,
  step: 2,
};

// reducer === pure function
// const nextState = reducer({count: 10, step: 2}, {type: 'INCREMENT'});
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + state.step,
      };
    case 'SET_STEP':
      return {
        ...state,
        step: action.step,
      };
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = createStore(reducer);

store.subscribe(() => {
  console.log('dispatch called', store.getState());
});

console.log('state', store.getState());

store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'SET_STEP',
  step: 5,
});

// const button = document.createElement('button');
// button.addEventListener('tripleClick', (event) => {
//   event.data;
// });
// const event = new Event('tripleClick')
// event.data = 'button 1'
// button.dispatchEvent(event);
