import React, { Component } from 'react';

import styles from '../../styles/level3/topbar.css';

class TopBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            Sign In
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopBar;
