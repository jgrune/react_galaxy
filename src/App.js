import React, { Component } from 'react';
import Sky from './components/Sky.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="info">Click anywhere to place a star</div>
        <Sky />
      </div>
    );
  }
}

export default App;
