import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AxiosInstance from '../../../api/AxiosInstance';

function ModalWeatherInput({open, handleClose, setPredictionData, withAirportFeats, selectedAirport, selectedRunway}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        visibility: '',
        wind_speed: '',
        wind_gust: '',
        wind_direction: '',
        rvr: '',
        ceiling: '',
        airport_icao: selectedAirport,
        runway_designator: selectedRunway,
        weather_phenomenon: '',
        runway_ils_category: 'CAT III'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = () => {
        const axiosInstance = new AxiosInstance(setLoading, setError);
        axiosInstance.predict(formData, setPredictionData, withAirportFeats)
        handleClose();
    } 

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

        return (
        <>
        <Modal
        open={open}
        onClose={handleClose}
        >
            <Box sx={style}>
            <div className="space-y-4">
    <h2 className="text-xl font-semibold mb-2">Manual Weather Entry</h2>

    <div>
        <label htmlFor="visibility" className="block text-sm font-medium text-gray-700">Visibility (SM)</label>
        <input
        type="number"
        min={0}
        max={10}
        name="visibility"
        value={formData.visibility}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="wind_speed" className="block text-sm font-medium text-gray-700">Wind Speed (kt)</label>
        <input
        type="number"
        name="wind_speed"
        value={formData.wind_speed}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="wind_gust" className="block text-sm font-medium text-gray-700">Wind Gust (kt)</label>
        <input
        type="number"
        name="wind_gust"
        value={formData.wind_gust}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="wind_direction" className="block text-sm font-medium text-gray-700">Wind Direction (°)</label>
        <input
        type="number"
        min={-1}
        max={360}
        name="wind_direction"
        value={formData.wind_direction}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="rvr" className="block text-sm font-medium text-gray-700">RVR (ft)</label>
        <input
        type="text"
        name="rvr"
        value={formData.rvr}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="ceiling" className="block text-sm font-medium text-gray-700">Ceiling (ft AGL)</label>
        <input
        type="number"
        name="ceiling"
        value={formData.ceiling}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="weather_phenomenon" className="block text-sm font-medium text-gray-700">Weather Phenomena</label>
        <input
        type="text"
        name="weather_phenomenon"
        value={formData.weather_phenomenon}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="runway_ils_category" className="block text-sm font-medium text-gray-700">ILS Category</label>
        <input
        type="text"
        name="runway_ils_category"
        value={formData.runway_ils_category}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <div className="flex justify-end pt-4">
        <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow"
        >
        Predict
        </button>
    </div>
</div>

            </Box>
        </Modal>
        </>
        );
}

export default ModalWeatherInput