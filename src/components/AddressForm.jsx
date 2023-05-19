import { useState } from "react";
import React from 'react';
import './AddressForm.css';
const AddressForm = () => {
    const [address, setAddress] = useState({
        addressLineOne: '',
        addressLineTwo: '',
        city:'',
        state:'',
        zip:''
    });

    const handleChange = (event) => {
        setAddress({
            ...address,
            [event.target.name]: event.target.value
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit} className = "even-column">
            <label>
                <input placeholder = "Address Line One" type = "text" name = "addressLineOne" value = {address.addressLineOne} onChange = {handleChange}/>
            </label>
            <label>
                <input placeholder = "Address Line Two" type = "text" name = "addressLineTwo" value = {address.addressLineTwo} onChange = {handleChange} />
            </label>
            <label>
                <input placeholder = "City" type = "text" name = "city" value = {address.city} onChange={handleChange}/>
            </label>
            <label>
                <select defaultValue={""}>
                    <option value = "" disabled>Select State</option>
                    <option value = "CA">California</option>
                </select>
            </label>
            <label>
                <input placeholder ="zip" type ="text" name = "zip" value = {address.zip} onChange = {handleChange}></input>
            </label>
            <button type = "submit">Submit</button>
        </form>
    );
};

export default AddressForm;