import './styles/App.css';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Login } />
    </Switch>
  );
}

export default App;
