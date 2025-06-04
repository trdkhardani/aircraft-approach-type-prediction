import React, { useState, useEffect } from "react";
import AxiosInstance from "../api/AxiosInstance";
import gaugeComponent from "./Elements/Gauge/Gauge";
import Checkbox from "@mui/material/Checkbox"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import ModalWeatherInput from './Elements/Modals/ManualInput'

function RightSideBar({manualInputMode, selectedAirport, selectedRunway, metarData, rvrData}) {
    return (
        <aside className="w-100 bg-gray-800 text-white p-4 h-screen overflow-y-auto">
            <h2 className="font-semibold text-lg">Approach Prediction</h2>
            <ApproachRecommendation manualInputMode={manualInputMode} selectedAirport={selectedAirport} selectedRunway={selectedRunway} metarData={metarData} rvrData={rvrData} />
        </aside>
    )
}

function ApproachRecommendation({manualInputMode, selectedAirport, selectedRunway, metarData, rvrData}) {
    const [withAirportFeats, setWithAirportFeats] = useState(true);
    const [predictionData, setPredictionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const inputData = {
        visibility: metarData?.metar_info?.decoded?.visibility,
        wind_speed: metarData?.metar_info?.decoded?.wind?.speed,
        wind_gust: metarData?.metar_info?.decoded?.wind?.gust === null ? 0 : metarData?.metar_info?.decoded?.wind?.gust,
        wind_direction: metarData?.metar_info?.decoded?.wind?.direction === "VRB" ? -1 : metarData?.metar_info?.decoded?.wind?.direction,
        rvr: ">6000",
        ceiling: metarData?.metar_info?.decoded?.clouds[0]?.altitude,
        airport_icao: selectedAirport,
        runway_designator: selectedRunway,
        weather_phenomenon: "+TSRA",
        runway_ils_category: "CAT III"
    }

    useEffect(() => {       
        setLoading(true);
        setError(null);
        
    }, [inputData])

    function handleClick(){
        const axiosInstance = new AxiosInstance(setLoading, setError);
        axiosInstance.predict(inputData, setPredictionData, withAirportFeats)
    }

    const handleWithAirportFeatsChange = () => {setWithAirportFeats(!withAirportFeats)}

    const predictButton = () => {
        if(!manualInputMode){
            return (
            <>
            <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Predict</button>
            </>
            )
        } else {
            return (
            <>
            <ModalWeatherInput 
            open={open} 
            handleClose={handleClose} 
            setPredictionData={setPredictionData} 
            withAirportFeats={withAirportFeats} 
            selectedAirport={selectedAirport} 
            selectedRunway={selectedRunway}
            />
            <button onClick={handleOpen} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Manual Entry</button>
            </>
            )
        }
    }

    return (
        <>
        <div id="top-confidence-score" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <h3 className="font-semibold">Confidence Score</h3>
            {gaugeComponent((predictionData?.model_output?.paired_results[0]?.probability * 100).toFixed(2))}
        </div>
        <div id="recommended-approach" className="mb-4 p-3 bg-gray-700 rounded-md shadow">
            <h3 className="font-semibold opacity-50">Recommended Approach</h3>
            <p className="text-sm text-gray-300"><b>{predictionData?.model_output?.paired_results[0]?.approach_type}</b></p>
        </div>
        <div id="other-approach-1" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <p className="text-sm text-gray-300">{predictionData?.model_output?.paired_results[1]?.approach_type}</p>
            <p className="text-sm text-white-300">{(predictionData?.model_output?.paired_results[1]?.probability * 100).toFixed(2)}%</p>
        </div>
        <div id="other-approach-2" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <p className="text-sm text-gray-300">{predictionData?.model_output?.paired_results[2]?.approach_type}</p>
            <p className="text-sm text-white-300">{(predictionData?.model_output?.paired_results[2]?.probability * 100).toFixed(2)}%</p>
        </div>
        <div id="other-approach-3" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <p className="text-sm text-gray-300">{predictionData?.model_output?.paired_results[3]?.approach_type}</p>
            <p className="text-sm text-white-300">{(predictionData?.model_output?.paired_results[3]?.probability * 100).toFixed(2)}%</p>
        </div>
        <a className="with-airport-feats-checkbox">
        <Checkbox sx={{color: 'white', '&:hover': {bgcolor: 'blue'}}} checked={withAirportFeats} onChange={handleWithAirportFeatsChange}/>Include Airport Information
        <Tooltip anchorSelect=".with-airport-feats-checkbox" place="top">The system would consider airport-specific information to predict the approach type</Tooltip>
        </a>
        <div className="mb-4 p-3 flex justify-between">
        {predictButton()}
        {/* <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Predict</button> */}
        <button onClick={handleClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Report Inaccuracy</button>
        </div>
        <div id="debug">
            {/* <p>Manual Input Mode: {manualInputMode.toString()}</p>
            <p>Checkbox: {withAirportFeats.toString()}</p>
            <p>{inputData.visibility}</p>
            <p>{inputData.wind_speed}</p>
            <p>{inputData.wind_gust}</p>
            <p>{inputData.wind_direction}</p>
            <p>{inputData.rvr}</p>
            <p>{inputData.ceiling}</p>
            <p>{inputData.airport_icao}</p>
            <p>{inputData.runway_designator}</p>
            <p>{inputData.weather_phenomenon}</p>
            <p>{inputData.runway_ils_category}</p> */}
            {/* <p>{airportData?.airport_data?.latitude}</p>
            <p>{airportData?.airport_data?.longitude}</p> */}
        </div>
        </>
    )
}

export default RightSideBar