import React, { Component } from 'react';

import '../styles/search.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="search-input-box">
          <i class="fas fa-search"></i>
          <input className="input-field" type='text' />
        </div>
      </div>
    );
  }
}

export default Search;
