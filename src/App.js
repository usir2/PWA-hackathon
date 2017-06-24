import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'

import Header from './Components/Header'
import BodyContent from './Components/BodyContent'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <BodyContent />
      </div>
    );
  }
}

export default App;
