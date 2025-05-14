import React, { useRef, useEffect } from "react";
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const VITE_MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

function MapPanel() {
    const mapContainerRef = useRef();
    const mapRef = useRef();

    useEffect(() => {
        mapboxgl.accessToken = VITE_MAPBOX_TOKEN
        
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [-77.455803, 38.9445], // washington dulles intl
            zoom: 12
        });

        const el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker(el)
        .setLngLat([-77.4593, 38.9706]) // runway 19C
        .setPopup(
            new mapboxgl.Popup({offset: 25})
            .setHTML(
                `<h3>KIAD</h3><p>Runway 19C</p>`
            )
        ).addTo(mapRef.current)
    });

    return (
    <div id="map-container" ref={mapContainerRef} />
    );
}

export default MapPanel;