import React from 'react';
import './App.css';
import Map from './components/Map';
function App() {
  return (
    <div className="App">
      <h1>San Francisco Food Truck Tracker</h1>
      <div id ="app-map-container">
        <Map />
      </div>
    </div>
  );
}

export default App;
