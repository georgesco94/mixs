import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "../src/components/nav";
import Footer from "../src/components/footer";
import Home from "../src/components/home";
import Activity from "../src/components/activity";

import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: {},
      filterText: "",
      selected:1
    };
    this.updateSelected = this.updateSelected.bind(this);
  }

  componentDidMount() {
    const url = 'http://www.mocky.io/v2/5b26d6ac3000007f00ee27b5';

    fetch(url)
      .then( results => results.json()).then(acts => {
        this.setState( { activities: acts } );
      }
    );
  }

  updateSelected(id) {
    this.setState( {selected : id} );
  }

  render() {
    const selected = this.state.selected;
    const activities = this.state.activities;
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route
            exact path="/"
            render={(props) => <Home {...props} activities={activities} />} />
          <Route
            path={`/events/:id`}
            render={ (props) => <Activity {...props}
                      activity={activities[selected]}
                      updateSelected={this.updateSelected}/>} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
