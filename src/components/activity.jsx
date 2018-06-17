import React, { Component } from 'react';

class Activity extends Component {

  render() {
    return (
      <div className="home">
        {this.props.activity.description}
      </div>
    );
  }
}

export default Activity;
