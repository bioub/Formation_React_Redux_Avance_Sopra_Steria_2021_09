import './index.css';

import { configureStore } from '@reduxjs/toolkit';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { todosReducer } from './todos/reducers';
import { usersReducer } from './users/reducers';

ReactDOM.render(
  <StrictMode>
    <Provider store={configureStore({
      reducer: {
        todos: todosReducer,
        users: usersReducer,
      }
    })}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
