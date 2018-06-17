import React, { Component } from 'react';

class Activity extends Component {

  componentDidMount() {
    this.props.updateSelected(this.props.match.params.id);
  }

  render() {
    return (
      <div className="home">
        {this.props.activity.description} <br />
        {this.props.activity.city} <br />
        {this.props.activity.location} <br />
        {this.props.match.params.id}
      </div>
    );
  }
}

export default Activity;
