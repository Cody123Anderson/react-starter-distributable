import React from 'react';
import ReactDOM from 'react-dom';

import { ReactStarterDistributable } from '../dist/bundle-dev';

// Create a DOM Node to mount the React Application to
const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

ReactDOM.render(<ReactStarterDistributable />, mountNode);
