import React, { useState } from 'react';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/navbar';
import LeftSideBar from './components/leftsidebar';
import RightSideBar from './components/RightSidebar';

function PredictionDashboardPage() {
  const [selectedAirport, setSelectedAirport] = useState('')

  return (
    <div>
      <NavBar onAirportChange={setSelectedAirport} selectedAirport={selectedAirport} />
      <div className="flex h-screen">
      <LeftSideBar selectedAirport={selectedAirport} />
      <main className="flex-1 bg-gray-100 p-6"><MapPanel /></main>
      <RightSideBar />
      </div>
    </div>
  )
}

function MapPanel() {
  return (
    <div></div>
  )
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <PredictionDashboardPage />
    </>
  )
}

export default App
