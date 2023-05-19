import React from 'react';
import './App.css';
import AddressForm from './components/AddressForm';
import Map from './components/Map';
function App() {
  return (
    <div className="App">
      <h1>Welcome to the food truck tracker</h1>
      <div id="form-description-container">        
        <AddressForm/>
        <div className = "even-column" id = "description"> Enter an address in the form on the left, <br/> and the map will pan to the nearby area. <br/> The map shows all food trucks with a <br/> registered  permit in San Francisco</div>
      </div>
      <div id ="app-map-container">
        <Map />
      </div>
    </div>
  );
}

export default App;
