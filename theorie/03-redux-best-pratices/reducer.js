const { combineReducers } = require("redux");
const { INCREMENT, SET_STEP } = require("./constants");

const initialState = {
  count: 10,
  step: 2,
};

function countReducer(state = initialState.count, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    default:
      return state;
  }
}

function stepReducer(state = initialState.step, action) {
  switch (action.type) {
    case SET_STEP:
      return action.payload;
    default:
      return state;
  }
}

// reducer === pure function
// const nextState = reducer({count: 10, step: 2}, {type: 'INCREMENT'});
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: countReducer(state.count, action),
//       };
//     case 'SET_STEP':
//       return {
//         ...state,
//         step: stepReducer(state.step, action),
//       };
//     default:
//       return state;
//   }
// }

exports.reducer = combineReducers({
  count: countReducer,
  step: stepReducer,
})