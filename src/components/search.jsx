import React, { Component } from 'react';

import '../styles/search.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="search-input-box">
          <i className="fas fa-search"></i>
          <input className="input-field" type='text' onChange={this.props.updateFilterText}/>
        </div>
      </div>
    );
  }
}

export default Search;
