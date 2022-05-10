import './styles/App.css';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path='/login' component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
