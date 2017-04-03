import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from '../../reducers';
import routes from './routes';

// Create Redux Store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Create a DOM Node to mount the React Application to
const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

// Render the Application on the new DOM Node
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>, mountNode);
