import { useState } from "react";
import React from 'react';
import './AddressForm.css';
const AddressForm = ({handleCoordinateChange}) => {
    const [coordinates, setCoordinates] = useState({
        latitude: 37.7749,
        longitude: -122.4194
    });

    const handleChange = (event) => {
        setCoordinates({
            ...coordinates,
            [event.target.name]: event.target.value
        });


    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCoordinateChange({...coordinates});

    }

    return(
        <form onSubmit={handleSubmit} className = "even-column">
            <label>
                <input placeholder = "latitude" type = "text" name = "latitude" value = {coordinates.latitude} onChange = {handleChange}/>
            </label>
            <label>
                <input placeholder = "longitude" type = "text" name = "longitude" value = {coordinates.longitude} onChange = {handleChange} />
            </label>
            <button type = "submit">Submit</button>
        </form>
    );
};

export default AddressForm;