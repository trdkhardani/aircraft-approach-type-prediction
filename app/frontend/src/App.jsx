import React from 'react';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/navbar';
import LeftSideBar from './components/leftsidebar';
import RightSideBar from './components/RightSidebar';

function PredictionDashboardPage() {
  return (
    <div>
      <NavBar />
      <div className="flex h-screen">
      <LeftSideBar />
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
