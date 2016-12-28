import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './app';
import reducers from '../../reducers';

const mountNode = document.createElement('div');
const createStoreWithMiddleware = applyMiddleware()(createStore);

document.body.appendChild(mountNode);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>

  </Provider>, mountNode);
