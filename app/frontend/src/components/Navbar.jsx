import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AxiosInstance from '../api/AxiosInstance'
import Checkbox from '@mui/material/Checkbox';

function NavBar({onAirportChange, onRunwayChange, selectedAirport, onManualInputModeChange, manualInputMode, mapRef, airportData}) {
    const [runwayData, setRunwayData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      if(!selectedAirport) return;

      setLoading(true);
      setError(null);

      const axiosInstance = new AxiosInstance(setLoading, setError)
      axiosInstance.fetchAirport(selectedAirport, setRunwayData);
    }, [selectedAirport])

    const fetchRunwayStatus = () => {
      if(loading){
        return "Please Wait..."
      } else {
        return "Select Runway"
      }
    }

    const handleMapClick = () => {
      mapRef.current.flyTo({
        center: [airportData?.airport_data?.longitude, airportData?.airport_data?.latitude],
        zoom: 12.5
      })
    }

    const handleManualInputModeChange = () => {onManualInputModeChange(!manualInputMode)}

    return (
      <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold flex items-center gap-2">
          {/* <img src="../assets/react.svg" alt="ApproachSafe Logo" /> */}
          ApproachSafe
        </div>
        <div className="flex items-center gap-4">
          <select onMouseMove={handleMapClick} onChange={(e) => onAirportChange(e.target.value)} className="bg-gray-700 text-sm px-3 py-1 rounded-md">
            <option value="No airport selected">Select Airport</option>
            <option value="KLAX">KLAX - Los Angeles International Airport</option>
            <option value="KATL">KATL - Hartsfield-Jackson International Airport</option>
            <option value="KIAD">KIAD - Washington Dulles International Airport</option>
            <option value="KJFK">KJFK - John F. Kennedy International Airport</option>
            <option value="KORD">KORD - Chicago O Hare International Airport</option>
            <option value="KSFO">KSFO - San Fransisco International Airport</option>
          </select>
          <select onChange={(e) => onRunwayChange(e.target.value)} className="bg-gray-700 text-sm px-3 py-1 rounded-md">
            <option value="">{error ? "Error encountered" : fetchRunwayStatus()}</option>
            {runwayData?.airport_data?.runways?.map((runway, index) => (
              <>
              <option key={index} value={runway.le}>{runway.le}</option>
              <option key={index} value={runway.he}>{runway.he}</option>
              </>
            ))}
          </select>
          <>
          <a className="manual-input-checkbox">
          <Checkbox sx={{color: 'white', '&:hover': {bgcolor: 'blue'}}} checked={manualInputMode} onChange={handleManualInputModeChange} />Manual Weather Input
          </a>
          </>
        </div>
      </nav>
    );
  }

NavBar.propTypes = {
    onAirportChange: PropTypes.func.isRequired,
    onRunwayChange: PropTypes.func.isRequired,
    selectedAirport: PropTypes.string.isRequired,
    mapRef: PropTypes.func.isRequired,
    airportData: PropTypes.object.isRequired,
}

export default NavBar