import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AxiosInstance from '../api/AxiosInstance'

function NavBar({onAirportChange, onRunwayChange, selectedAirport}) {
    const [runwayData, setRunwayData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      if(!selectedAirport) return;

      setLoading(true);
      setError(null);

      const axiosInstance = new AxiosInstance(setLoading, setError)
      axiosInstance.fetchRunway(selectedAirport, setRunwayData);
    }, [selectedAirport])

    const fetchRunwayStatus = () => {
      if(loading){
        return "Please Wait..."
      } else {
        return "Select Runway"
      }
    }

    return (
      <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold flex items-center gap-2">
          {/* <img src="../assets/react.svg" alt="ApproachSafe Logo" /> */}
          ApproachSafe
        </div>
        <div className="flex items-center gap-4">
          <select onChange={(e) => onAirportChange(e.target.value)} className="bg-gray-700 text-sm px-3 py-1 rounded-md">
            <option value="No airport selected">Select Airport</option>
            <option value="KLAX">KLAX</option>
            <option value="KATL">KATL</option>
            <option value="KIAD">KIAD</option>
            <option value="KJFK">KJFK</option>
            <option value="KORD">KORD</option>
            <option value="KSFO">KSFO</option>
          </select>
          <select onChange={(e) => onRunwayChange(e.target.value)} className="bg-gray-700 text-sm px-3 py-1 rounded-md">
            <option value="">{error ? "Error encountered" : fetchRunwayStatus()}</option>
            {runwayData?.data?.map((runway, index) => (
              <option key={index} value={runway}>{runway}</option>
            ))}
          </select>
        </div>
      </nav>
    );
  }

NavBar.propTypes = {
    onAirportChange: PropTypes.func.isRequired,
    selectedAirport: PropTypes.string.isRequired
}

export default NavBar