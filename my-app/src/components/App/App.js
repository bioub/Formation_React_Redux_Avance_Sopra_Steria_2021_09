import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import ThemeColorProvider from '../../contexts/ThemeColorContext';
import Todos from '../../todos/components/Todos/Todos';
import Users from '../../users/components/Users/Users';
import Home from '../Home/Home';
import TopBar from '../TopBar/TopBar';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeColorProvider>
          <TopBar />
          <div className="App-Route-Container">
            <Route path="/" component={Home} exact />
            <Route path="/todos" component={Todos} />
            <Route path="/users" component={Users} />
          </div>
        </ThemeColorProvider>
      </BrowserRouter>
    </div>
  );
}
