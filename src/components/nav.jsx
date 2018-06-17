import React, { Component } from 'react';
import Search from './search';
import {Link} from 'react-router-dom';

import '../styles/nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-content">
          <div className="nav-title">
            <Link to="/">DiscoverMixs</Link>
          </div>
          <Search updateFilterText={this.props.updateFilterText}/>
        </div>
      </div>
    );
  }
}

export default Nav;
