import React, { Component } from 'react';
import Search from './search';
import {Link,withRouter} from 'react-router-dom';

import '../styles/nav.css';

class Nav extends Component {
  render() {
    const isAtHomePage = this.props.location.pathname === "/" ? true :false ;
    return (
      <div className="nav">
        <div className="nav-content">
          <div className="nav-title">
            <Link to="/">DiscoverMixs</Link>
          </div>
          {isAtHomePage ?
                  <Search updateFilterText={this.props.updateFilterText}/>
                  : <Link to="/">
                      <i className="fas fa-arrow-alt-circle-left"></i>    
                    </Link>}
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
