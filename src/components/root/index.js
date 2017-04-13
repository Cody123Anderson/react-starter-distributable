/* Export all distributable components in this file */

import React, { Component } from 'react';

import './index.scss';
import Example from './example';

export class ReactStarterDistributable extends Component {
  render() {
    return (
      <div className="react-starter-distributable">
        <Example />
      </div>
    );
  }
}
