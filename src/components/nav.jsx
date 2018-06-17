import React, { Component } from 'react';
import Search from './search';

import '../styles/nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-content">
          <div className="nav-title">
            DiscoverMixs
          </div>
          <Search />
        </div>
      </div>
    );
  }
}

export default Nav;
