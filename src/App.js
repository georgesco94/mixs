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
      activities: [],
      filterText: ""
    };
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5b25c0ad310000d30f6a7254')
      .then( results => results.json()).then(acts => {
        this.setState( { activities: acts } );
      }
    );
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route
            exact path="/"
            render={(props) => <Home {...props} activities={this.state.activities} />} />
          <Route
            path={`/events`}
            render={ (props) => <Activity {...props}/>} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
