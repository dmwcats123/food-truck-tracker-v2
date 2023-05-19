import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import icon from '../util/icon.js'
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Map.css';

function Map() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [markers, setMarkers] = useState([])

    useEffect(() =>{

        const fetchData = async() => {
            try {
                const url = "https://data.sfgov.org/resource/rqzj-sfat.json";
                const appToken = "C8iy1b7Cj36FiX5zkn58oocHY";
                const response = await axios.get(url, {
                    headers: {
                        'X-App-Token': appToken
                    }
                });
            
                const data = response.data;
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        if(data) {
            const newMarkers = data.map(({objectid, applicant, latitude, longitude, fooditems, facilitytype}) => {
                if( facilitytype == 'Truck') {
                    const marker = <Marker key = {objectid} position={[latitude, longitude]} icon ={icon}>
                        <Popup>
                            <p>Name: {applicant}</p>
                            <p>Food: {fooditems}</p>
                        </Popup>
                    </Marker>;
                    return marker;
                }

            });
            setMarkers(newMarkers)
        }

    }, [data]);

    return (
        <MapContainer className = "map-container" center={[37.7749, -122.4194]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}

        </MapContainer>
    );
}

export default Map;