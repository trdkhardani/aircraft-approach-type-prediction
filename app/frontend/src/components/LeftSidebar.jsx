import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import AxiosInstance from "../api/AxiosInstance";

function LeftSideBar({selectedAirport}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        if (!selectedAirport) return; // skip fetch if airport is empty
        setLoading(true)
        setError(null)

        const axiosInstance = new AxiosInstance(setData, setLoading, setError);
        axiosInstance.fetchMetar(selectedAirport)
    }, [selectedAirport])

    return (
    <aside className="w-64 bg-gray-800 text-white p-4 h-screen overflow-y-auto">
        <MetarBox selectedAirport={selectedAirport} data={data} loading={loading} error={error} />
        <RvrBox selectedAirport={selectedAirport} />
        <WindBox data={data} loading={loading} error={error} />
    </aside>
    );
}

function MetarBox({selectedAirport, data, loading, error}) {
    return (
    <div className="mb-4 p-3 bg-gray-700 rounded-md shadow">
        <h3 className="font-semibold opacity-50">METAR</h3>
        {selectedAirport === "No airport selected" 
        ? <p className="text-sm text-gray-300">Please select an airport to view METAR data</p> 
        : null}
        {error 
        ? <p className="text-sm text-red-400">We couldn’t load the latest weather data. Please check your internet connection or try again shortly.</p> 
        : <p className="text-sm text-gray-300">{loading ? <Skeleton baseColor="#3b3b3b" highlightColor="#4b4b4b" count={2} duration={1.5} enableAnimation={true}/> :  data.metar_info.raw}</p>}
    </div>
    );
}

function RvrBox({selectedAirport}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        if (!selectedAirport) return; // skip fetch if airport is empty
        setLoading(true)
        setError(null)

        const axiosInstance = new AxiosInstance(setData, setLoading, setError);
        axiosInstance.fetchRvr(selectedAirport)
    }, [selectedAirport])

    return (
    <div>
        <div className="mb-4 p-3 bg-gray-700 rounded-md shadow">
        <h3 className="font-semibold opacity-50">RVR (Runway Visual Range)</h3>
        <table className="-mx-2 -my-2 w-64 border-separate border-spacing-2 table-fixed text-sm">
            <tbody>
                {error
                ? <tr><td className="text-sm text-red-400">{selectedAirport === "No airport selected" ? "Please select an airport to view METAR data" : `We couldn’t load the latest RVR data. Please check your internet connection or try again shortly.`}</td></tr>
                : data?.rvr_data?.rvr?.map((rvr, index) => (
                    <tr key={index}>
                    <td>{loading ? <Skeleton baseColor="#3b3b3b" highlightColor="#4b4b4b" enableAnimation={true} /> : rvr.runway}</td>
                    <td>{loading ? <Skeleton baseColor="#3b3b3b" highlightColor="#4b4b4b" enableAnimation={true} /> : rvr.rvr_TD}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
    );
}

function WindBox({selectedAirport, data, loading, error}) {
    const windData = {
        speed: data.metar_info?.decoded?.wind?.speed,
        gust: data.metar_info?.decoded?.wind?.gust,
        direction: data.metar_info?.decoded?.wind?.direction
    };
    

    return (
    <div className="mb-4 p-3 bg-gray-700 rounded-md shadow">
        <h3 className="font-semibold opacity-50">Wind Conditions</h3>
        {windData.speed === undefined 
        ? <p className="text-sm text-gray-400">Please select an airport to view wind data</p> 
        : null}
        {error 
        ? <p className="text-sm text-red-400">We couldn’t load the latest weather data. Please check your internet connection or try again shortly.</p> 
        : <> 
        <p className="text-sm text-gray-300 text-center">{windData.direction === "VRB" ? `Variable` : `${windData.direction}°`}</p>
        <img src={`/src/assets/${windData.direction === 0 ? `straight-line.png` : `arrow-up.png`}`} alt="Direction Arrow" className={`size-15 ${windData.direction === "VRB" ? `rotate` : ''}`} style={{ transform: `rotate(${windData.direction - 180 < 0 ? windData.direction+180 : windData.direction-180}deg)` }} />
        <p className="text-sm text-gray-300 text-center">{windData.gust === null ? `${windData.speed} kts` : `${windData.speed} kts Gust ${windData.gust} kts`}</p>
        </>}
        
    </div>
    );
}

LeftSideBar.propTypes = {
    selectedAirport: PropTypes.string.isRequired
}

MetarBox.propTypes = {
    selectedAirport: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
}

RvrBox.propTypes = {
    selectedAirport: PropTypes.string.isRequired
}

WindBox.propTypes = {
    data: PropTypes.object
}

export default LeftSideBar