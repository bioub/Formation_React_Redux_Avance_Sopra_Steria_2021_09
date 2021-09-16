import './App.css';

import { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ThemeColorProvider from '../../contexts/ThemeColorContext';
// import Todos from '../../todos/components/Todos/Todos';
// import Users from '../../users/components/Users/Users';
// import Home from '../Home/Home';
import TopBar from '../TopBar/TopBar';

const Home = lazy(() => import('../Home/Home'));
const Todos = lazy(() => import('../../todos/components/Todos/Todos'));
const Users = lazy(() => import('../../users/components/Users/Users'));

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeColorProvider>
          <TopBar />
          <div className="App-Route-Container">
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/" component={Home} exact />
              <Route path="/todos" component={Todos} />
              <Route path="/users" component={Users} />
            </Suspense>
          </div>
        </ThemeColorProvider>
      </BrowserRouter>
    </div>
  );
}
