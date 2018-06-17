import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "../src/components/nav";
import Footer from "../src/components/footer";
import Home from "../src/components/home";
import EventPage from "../src/components/eventPage";

import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5b25c0ad310000d30f6a7254')
      .then( results => results.json()).then(acts => {
        this.setState( { activities: acts } );
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Home activities={this.state.activities} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
