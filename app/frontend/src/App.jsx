import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Provider from './context/Provider';
import ProductsUserView from './pages/ProductsUserView';
import ProductsAdminView from './pages/ProductsAdminView';

import './styles/App.css';
import Cart from './pages/Cart';
import Deposit from './pages/Deposit';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Provider>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/user/products" component={ProductsUserView} />
        <Route path="/user/cart" component={Cart} />
        <Route path="/user/deposit" component={Deposit} />
        <Route path="/admin/products" component={ProductsAdminView} />
        <Route path="/user/product/:id" render={({ match: { params: { id } } }) => (<ProductDetails id={id} />)} />
      </Switch>
    </Provider>
  );
}

export default App;
