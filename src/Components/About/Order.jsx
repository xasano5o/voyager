import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [map, setMap] = useState(null);
    const [addressList, setAddressList] = useState([]);

    const handleLoad = map => {
        setMap(map);
    };

    const handleSearch = () => {
        // Kullanıcının girdiği adresi veya konumu arayın ve haritada işaretleyin
        // Bu kısmı Google Maps API'nin Places API veya Geocoding API gibi hizmetlerini kullanarak yapabilirsiniz.
        // Ayrıca, bulunan adresi adres listesine ekleyin
        setAddressList([...addressList, searchText]);
    };

    return (
        <div>
            <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {addressList.map((address, index) => (
                    <li key={index}>{address}</li>
                ))}
            </ul>
     
        </div>
    );
};

export default MapContainer;
