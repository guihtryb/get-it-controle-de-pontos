import './styles/App.css';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Provider from './context/Provider';
import ProductsUserView from './pages/ProductsUserView';

function App() {
  return (
    <Provider>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/user/products' component={ ProductsUserView } />
      </Switch>
    </Provider>
  );
}

export default App;
