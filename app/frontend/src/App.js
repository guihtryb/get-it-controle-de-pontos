import './styles/App.css';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Provider from './context/Provider';

const Products = () => (<h1>Products</h1>)

function App() {
  return (
    <Provider>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/products' component={ Products } />
      </Switch>
    </Provider>
  );
}

export default App;
