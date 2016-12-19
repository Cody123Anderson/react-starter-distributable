import React from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './landing-page';

const mountNode = document.createElement('div');

document.body.appendChild(mountNode);
ReactDOM.render(<LandingPage />, mountNode);
