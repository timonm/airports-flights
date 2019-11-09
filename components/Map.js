import React, { Component, createRef } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { debounce } from 'lodash';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

// Leaflet.Geodesic
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

export default class MyMap extends Component {
    constructor(props) {
        super(props);
        this.debouncedFetchAirports = debounce(this.fetchAirports, 1000);
        this.state = {
            zoom: 6,
            lat: '51.507351', // London as default
            lng: '-0.127758',
            loading: true,
            data: [],
        };
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(this.successPosition, this.errorPosition, options);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { zoom } = this.state;
        if (nextState.zoom !== zoom) {
            // Don't render while zooming
            return false;
        }
        return true;
    }

    onMove = event => {
        const { zoom } = this.state;
        const newZoom = event.target.getZoom();
        if (newZoom !== zoom) {
            this.setState({ zoom: newZoom });
            return false;
        }
        const location = event.target.getCenter();
        this.setState({ lat: location.lat, lng: location.lng, zoom: newZoom });
        this.debouncedFetchAirports();
    };

    fetchAirports = async () => {
        const { lat, lng } = this.state;
        const response = await fetch(`/api/airports?lat=${lat}&lng=${lng}`);
        const result = await response.json();
        this.setState({ data: result.data, loading: false });
    };

    successPosition = pos => {
        const crd = pos.coords;
        this.setState({ lat: crd.latitude, lng: crd.longitude });
        this.fetchAirports();
    };

    errorPosition = error => {
        console.log('error with position fetch');
        this.fetchAirports();
    };

    render() {
        const { zoom, lat, lng, data, loading } = this.state;
        const center = [lat, lng];
        return (
            <Wrapper>
                {loading ? null : (
                    <Map center={center} zoom={zoom} onMoveEnd={e => this.onMove(e)}>
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
                )}
            </Wrapper>
        );
    }
}

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
