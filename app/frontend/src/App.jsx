import React from 'react';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/navbar';
import LeftSideBar from './components/leftsidebar';

function PredictionDashboardPage() {
  return (
    <div>
      <NavBar />
      <LeftSideBar />
      <MapPanel />
      <RightSideBar />
    </div>
  )
}

function MapPanel() {
  return (
    <div></div>
  )
}

function ApproachRecommendation() {
  return (
    <div></div>
  )
}

function RiskAssessmentBox() {
  return (
    <div></div>
  )
}

function RightSideBar() {
  return (
    <div>
      <ApproachRecommendation />
      <RiskAssessmentBox />
    </div>
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
