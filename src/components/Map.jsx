import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import React from 'react';
import { useEffect, useState } from 'react';
import './Map.css';

function Map() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() =>{

        const fetchData = async() => {
            try {
                const url = "https://data.sfgov.org/resource/rqzj-sfat";
                const appToken = "C8iy1b7Cj36FiX5zkn58oocHY";
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${appToken}`
                    }
                });
                
                const jsonData = await response.json();
                
            } catch(error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    });

    return (
        <MapContainer className = "map-container" center={[37.7749, -122.4194]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    );
}

export default Map;