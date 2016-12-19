import React, { Component } from 'react';
import Sky from './components/Sky.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <div className="info">Click anywhere to place a star</div>
        <Sky />
      </div>
    );
  }
}

export default App;
