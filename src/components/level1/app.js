import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from '../level2/home-page';

const mountNode = document.createElement('div');

document.body.appendChild(mountNode);
ReactDOM.render(<HomePage />, mountNode);
