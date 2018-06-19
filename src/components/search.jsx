import React, { Component } from 'react';

import '../styles/search.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="search-input-box">
          <i className="fas fa-search"></i>
          <input autoFocus className="input-field" type='text'
                 onChange={(e)=>this.props.updateFilterText(e.target.value)}/>
        </div>
      </div>
    );
  }
}

export default Search;
