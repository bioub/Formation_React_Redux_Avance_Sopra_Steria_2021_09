import './index.css';

import { configureStore } from '@reduxjs/toolkit';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { todosReducer } from './todos/reducers';
import { usersReducer } from './users/reducers';

const store = configureStore({
  reducer: {
    todos: persistReducer({ key: 'todos', storage }, todosReducer),
    users: usersReducer,
  },
});

// store.subscribe(() => {
//   localStorage.setItem('store', JSON.parse(store.getState()))
// });

const persistor = persistStore(store);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
