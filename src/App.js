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
    this.fetchActivities = this.fetchActivities.bind(this);
  }

  componentDidMount() {
    this.fetchActivities().then(activities => {
      this.setState( { activities: activities } );
    });
  }

  fetchActivities() {
    const url = 'http://www.mocky.io/v2/5b26f9ed3000006206ee27df';

    const activitiesStream = fetch(url);
    const activitiesAsJSON = activitiesStream.then( stream => stream.json());

    return activitiesAsJSON;
  }

  updateSelected(id) {
    this.setState( {selected : id} );
  }

  updateFilterText(filterString) {
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
            render={(props) => <Home {...props}
                                  updateFilterText={this.updateFilterText}
                                  activities={activities} />} />
          <Route
            path={`/events/:id`}
            render={ (props) => <Activity {...props}
                      activity={activities[selected]}
                      fetchActivities={this.fetchActivities}
                      updateSelected={this.updateSelected}/>}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
