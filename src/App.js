import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "../src/components/nav";
import Footer from "../src/components/footer";
import Home from "../src/components/home";
import EventPage from "../src/components/eventPage";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Home />
          <Route exact path={`/event`} component={EventPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
