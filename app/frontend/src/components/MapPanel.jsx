import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from "prop-types";

const VITE_MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const INITIAL_CENTER = [
  -100.7205, // long
  39.1989 // lat
]
const INITIAL_ZOOM = 3.44

function MapPanel({airportData, mapRef}) {
    const mapContainerRef = useRef();
    // const mapRef = useRef();

    const [center, setCenter] = useState(INITIAL_CENTER)
    const [zoom, setZoom] = useState(INITIAL_ZOOM)

    useEffect(() => {
        mapboxgl.accessToken = VITE_MAPBOX_TOKEN
        
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: center,
            zoom: zoom
        });

        mapRef.current.on("move", () => {
            // get the current center coordinates and zoom level from the map
            const mapCenter = mapRef.current.getCenter()
            const mapZoom = mapRef.current.getZoom()

            // update state
            setCenter([ mapCenter.lng, mapCenter.lat ])
            setZoom(mapZoom)
        })

        const el = document.createElement('div');
        el.className = 'marker';

        // for(const runway of airportData.airport_data.runways){
        //     new mapboxgl.Marker(el)
        //     .setLngLat([runway.le_longitude, runway.le_latitude]) // runway 19C
        //     .setPopup(
        //         new mapboxgl.Popup({offset: 25})
        //         .setHTML(
        //             `<h3>${airportData.airport_data.icao}</h3><p>Runway ${runway.le}</p>`
        //         )
        //     ).addTo(mapRef.current)
        // }
        new mapboxgl.Marker(el)
        .setLngLat([-77.4593, 38.9706]) // runway 19C
        .setPopup(
            new mapboxgl.Popup({offset: 25})
            .setHTML(
                `<h3>KIAD</h3><p>Runway 19C</p>`
            )
        ).addTo(mapRef.current)

        return () => {
            mapRef.current.remove()
        }
    }, []);

    const handleButtonClick = () => {
        mapRef.current.flyTo({
            center: [airportData?.airport_data?.longitude, airportData?.airport_data?.latitude],
            zoom: 12.5
        })
    //     mapRef.current.flyTo({
    //         center: INITIAL_CENTER,
    //         zoom: INITIAL_ZOOM
    //     })
    }

    return (
    <>
        <div>
            Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
        </div>
        <button onClick={handleButtonClick}>Reset</button>
        <div id="map-container" ref={mapContainerRef} />
    </>
    );
}

MapPanel.propTypes = {
    airportData: PropTypes.object.isRequired,
    mapRef: PropTypes.func
}

export default MapPanel;