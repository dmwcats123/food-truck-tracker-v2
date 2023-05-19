import React from 'react';
import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import AddressForm from './components/AddressForm';

function App() {
  const [coordinates, setCoordinates] = useState({
    latitude: 37.7749,
    longitude: -122.4194
  })

  const handleCoordinateChange = (coordinates) => {
    setCoordinates(coordinates)
  }

  return (
    <div className="App">
      <h1>San Francisco Food Truck Tracker</h1>
      <div id="form-description-container">        
        <AddressForm handleCoordinateChange={handleCoordinateChange}/>
        <div className = "even-column" id = "description"> Enter coodinates in the form on the left, <br/> and the map will pan to the nearby area. <br/> The map shows all food trucks with a <br/> registered  permit in San Francisco</div>
      </div>
      <div id ="app-map-container">
        <Map coordinates={coordinates}/>
      </div>
    </div>
  );
}

export default App;
