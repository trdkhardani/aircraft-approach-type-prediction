import React, { useState, useEffect, useRef } from "react";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import AxiosInstance from "./api/AxiosInstance";
import NavBar from "./components/navbar";
import LeftSideBar from "./components/leftsidebar";
import MapPanel from "./components/MapPanel";
import RightSideBar from "./components/RightSidebar";

function PredictionDashboardPage() {
  const [selectedAirport, setSelectedAirport] = useState("");
  const [selectedRunway, setSelectedRunway] = useState("");
  const [manualInputMode, setManualInputMode] = useState(false)

  const mapRef = useRef();

  const [metarData, setMetarData] = useState([]);
  const [rvrData, setRvrData] = useState([]);
  const [airportData, setAirportData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedAirport) return; // skip fetch if airport is empty
    setLoading(true);
    setError(null);

    const axiosInstance = new AxiosInstance(setLoading, setError);
    axiosInstance.fetchMetar(selectedAirport, setMetarData);
    axiosInstance.fetchRvr(selectedAirport, setRvrData);
    axiosInstance.fetchAirport(selectedAirport, setAirportData)
  }, [selectedAirport, selectedRunway]);

  return (
    <div>
      <NavBar
        onAirportChange={setSelectedAirport}
        onRunwayChange={setSelectedRunway}
        selectedAirport={selectedAirport}
        onManualInputModeChange={setManualInputMode}
        manualInputMode={manualInputMode}
        mapRef={mapRef}
        airportData={airportData}
      />
      <div className="flex h-screen">
        <LeftSideBar
          selectedAirport={selectedAirport}
          metarData={metarData}
          rvrData={rvrData}
          loading={loading}
          error={error}
        />
        <main className="flex-1 bg-gray-100 p-6">
          <MapPanel airportData={airportData} mapRef={mapRef}/>
        </main>
        <RightSideBar
          manualInputMode={manualInputMode}
          selectedAirport={selectedAirport}
          selectedRunway={selectedRunway}
          metarData={metarData}
          rvrData={rvrData}
          loading={loading}
          error={error}
          airportData={airportData}
        />
      </div>
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <PredictionDashboardPage />
    </>
  );
}

export default App;
