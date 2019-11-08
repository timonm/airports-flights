import React, { Component, createRef } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import styled from 'styled-components';

export default class MyMap extends Component {
    state = {
        zoom: 6,
    };

    render() {
        const { data, lat, lng } = this.props;
        const { zoom } = this.state;
        const center = [lat, lng];
        console.log(this.props);
        return (
            <Wrapper>
                <Map center={center} zoom={zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                    {data.map((item, key) => {
                        const { latitude, longitude } = item.location;
                        const { code, city } = item;
                        return (
                            <Marker key={key} position={[latitude, longitude]}>
                                <Popup>
                                    {city}, {code}
                                </Popup>
                            </Marker>
                        );
                    })}
                </Map>
            </Wrapper>
        );
    }
}

// function Map({ markerPosition }) {
//     // create map
//     const mapRef = useRef(null);
//     useEffect(() => {
//         mapRef.current = L.map('map', {
//             center: [49.8419, 24.0315],
//             zoom: 16,
//             layers: [
//                 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//                     attribution:
//                         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//                 }),
//             ],
//         });
//     }, []);

//     // add marker
//     const markerRef = useRef(null);
//     useEffect(() => {
//         if (markerRef.current) {
//             markerRef.current.setLatLng(markerPosition);
//         } else {
//             markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
//         }
//     }, [markerPosition]);

//     return <Wrapper id="map"></Wrapper>;
// }

// export default Map;
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    .map-root {
        height: 100%;
    }
    .leaflet-container {
        height: 100%;
        width: 100%;
    }
`;
