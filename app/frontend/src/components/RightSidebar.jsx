import React, { useState, useEffect } from "react";
import AxiosInstance from "../api/AxiosInstance";
// import { AgCharts } from 'ag-charts-react'

function RightSideBar({selectedAirport, selectedRunway, metarData, rvrData}) {
    return (
        <aside className="w-100 bg-gray-800 text-white p-4 h-screen overflow-y-auto">
            <h2 className="font-semibold text-lg">Approach Prediction</h2>
            <ApproachRecommendation selectedAirport={selectedAirport} selectedRunway={selectedRunway} metarData={metarData} rvrData={rvrData} />
            <RiskAssessmentBox />
        </aside>
    )
}

function ApproachRecommendation({selectedAirport, selectedRunway, metarData, rvrData}) {
    const [predictionData, setPredictionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const inputData = {
        visibility: metarData?.metar_info?.decoded?.visibility,
        wind_speed: metarData?.metar_info?.decoded?.wind?.speed,
        wind_gust: metarData?.metar_info?.decoded?.wind?.gust === null ? 0 : metarData?.metar_info?.decoded?.wind?.gust,
        wind_direction: metarData?.metar_info?.decoded?.wind?.direction,
        rvr: ">6000",
        ceiling: metarData?.metar_info?.decoded?.clouds[0]?.altitude,
        airport_icao: selectedAirport,
        runway_designator: selectedRunway,
        weather_phenomenon: "No Phenomenon",
        runway_ils_category: "CAT I"
    }

    useEffect(() => {       
        setLoading(true);
        setError(null);
        
    }, [inputData])

    function handleClick(){
        const axiosInstance = new AxiosInstance(setLoading, setError);
        axiosInstance.predict(inputData, setPredictionData)
    }

    return (
        <>
        <div id="top-confidence-score" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <h3 className="font-semibold">Confidence Score</h3>
            <p className="text-sm text-gray-300">{predictionData?.model_output?.paired_results[0]?.probability * 100}%</p>
        </div>
        <div id="recommended-approach" className="mb-4 p-3 bg-gray-700 rounded-md shadow">
            <h3 className="font-semibold opacity-50">Recommended Approach</h3>
            <p className="text-sm text-gray-300">{predictionData?.model_output?.paired_results[0]?.approach_type}</p>
        </div>
        <div id="other-approach-1" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <p className="text-sm text-gray-300">{predictionData?.model_output?.paired_results[1]?.approach_type}</p>
            <p className="text-sm text-white-300">{predictionData?.model_output?.paired_results[1]?.probability * 100}%</p>
        </div>
        <div id="other-approach-2" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <p className="text-sm text-gray-300">{predictionData?.model_output?.paired_results[2]?.approach_type}</p>
            <p className="text-sm text-white-300">{predictionData?.model_output?.paired_results[2]?.probability * 100}%</p>
        </div>
        <div id="other-approach-3" className="mb-4 p-3 bg-gray-700 rounded-md shadow flex justify-between">
            <p className="text-sm text-gray-300">{predictionData?.model_output?.paired_results[3]?.approach_type}</p>
            <p className="text-sm text-white-300">{predictionData?.model_output?.paired_results[3]?.probability * 100}%</p>
        </div>
        <button onClick={handleClick} className="bg-white-400 hover:bg-white-600 justify-center">PREDICT</button>
        <div id="debug">
            <p>{inputData.visibility}</p>
            <p>{inputData.wind_speed}</p>
            <p>{inputData.wind_gust}</p>
            <p>{inputData.wind_direction}</p>
            <p>{inputData.rvr}</p>
            <p>{inputData.ceiling}</p>
            <p>{inputData.airport_icao}</p>
            <p>{inputData.runway_designator}</p>
            <p>{inputData.weather_phenomenon}</p>
            <p>{inputData.runway_ils_category}</p>
        </div>
        </>
    )
}

function RiskAssessmentBox() {
    return (
        <div></div>
    )
}

export default RightSideBar