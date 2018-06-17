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
      filterText: ""
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Home filterText={this.state.filterText} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
