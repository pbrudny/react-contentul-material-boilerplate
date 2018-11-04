import React, { Component } from 'react';
import Routes from './routes';
import Navbar from "./common/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <Routes />
        <Navbar />
      </>
    );
  }
}

export default App;
