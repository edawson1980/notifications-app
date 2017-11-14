import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="NotificationsFrame">
        <div className="panel">
          <Header title="Marsupial Sightings"/>
          <Content activities= {activities}/>
        </div>

      </div>
    );
  }
}

export default App;
