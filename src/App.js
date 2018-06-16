import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Nav from "../src/components/nav";
import Footer from "../src/components/footer";
import Home from "../src/components/home";
import EventPage from "../src/components/eventPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <EventPage />
        <Footer />
      </div>
    );
  }
}

export default App;
