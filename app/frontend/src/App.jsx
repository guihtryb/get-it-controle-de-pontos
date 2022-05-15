import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Provider from './context/Provider';
import ProductsUserView from './pages/ProductsUserView';
import ProductsAdminView from './pages/ProductsAdminView';

import './styles/App.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user/products" component={ProductsUserView} />
        <Route exact path="/admin/products" component={ProductsAdminView} />
      </Switch>
    </Provider>
  );
}

export default App;
