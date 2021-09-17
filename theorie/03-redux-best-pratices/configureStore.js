const { createStore } = require('redux');
const { reducer } = require('./reducer');

function configureStore() {
  /** @type {import('redux').Store} */
  const store = createStore(reducer);
  return store;
}

exports.configureStore = configureStore;