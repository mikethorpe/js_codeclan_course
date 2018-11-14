import React, { Component } from 'react';
import OpeningFilmsBox from './containers/OpeningFilmsBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OpeningFilmsBox title="Opening Films Box"/>
      </div>
    );
  }
}

export default App;
