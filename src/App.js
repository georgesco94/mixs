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
    this.updateFilterText = this.updateFilterText.bind(this);
    this.getFilteredActivities = this.getFilteredActivities.bind(this);
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

  updateFilterText(e) {
    const filterString = e.target.value;
    this.setState( {filterText: filterString} );
  }

  getFilteredActivities() {
    const activities = Object.values(this.state.activities);
    const filterText = this.state.filterText.toLowerCase();

    const filteredActivities = activities.filter( (activity) => {
      const location = activity.location.toLowerCase();
      const city = activity.city.toLowerCase();

      return (
        (location.includes(filterText) || city.includes(filterText))
      );
    });

    return filteredActivities;
  }

  render() {
    const selected = this.state.selected;
    const activities = this.getFilteredActivities();

    return (
      <Router>
        <div className="App">
          <Nav updateFilterText={this.updateFilterText}/>
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
