import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Context from '../../context/Context';

const renderWithRouterAndContext = (component, context) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Context.Provider value={context} >
        <Router history={history}>
          {component}
        </Router>
      </Context.Provider>),
    history,
    context,
  });
};
export default renderWithRouterAndContext;
