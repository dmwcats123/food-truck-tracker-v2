import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'
import icon from '../util/icon.js'
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './Map.css';

const Map = ({coordinates}) => {
    const [data, setData] = useState(null);
    const [prevCoordinates, setPrevCoordinates] = useState(null);
    const [markers, setMarkers] = useState([])
    const mapRef = useRef(null);

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
            const newMarkers = data.map(({objectid, applicant, latitude, longitude, fooditems, facilitytype, status}) => {
                if( facilitytype === 'Truck' && status === "APPROVED") {
                    const marker = <Marker key = {objectid} position={[latitude, longitude]} icon ={icon}>
                        <Popup>
                            <p>Name: {applicant}</p>
                            <p>Food: {fooditems}</p>
                        </Popup>
                    </Marker>;
                    return marker;
                }
                return null;
            });
            setMarkers(newMarkers)
        }

        if (mapRef.current && coordinates && prevCoordinates !== coordinates) {
            mapRef.current.setView(L.latLng(coordinates.latitude, coordinates.longitude), 15);
            mapRef.current.closePopup();
            setPrevCoordinates(coordinates);
          }

    }, [data, coordinates, prevCoordinates]);

    return (
        <MapContainer ref = {mapRef} className = "map-container" center={[coordinates.latitude, coordinates.longitude]} zoom={1} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="map-tiles"
        />
        {markers}

        </MapContainer>
    );
}

export default Map;