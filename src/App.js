import React, { Component } from 'react';
import Nav from "../src/components/nav";
import Footer from "../src/components/footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Footer />
      </div>
    );
  }
}

export default App;
