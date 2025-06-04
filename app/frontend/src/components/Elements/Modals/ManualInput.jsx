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
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Manual Entry
            </Typography>
            <label htmlFor="visibility">Visibility
            <input name="visibility" value={formData.visibility} onChange={handleChange} />
            </label>
            <label htmlFor="wind_speed">Wind Speed
            <input name="wind_speed" value={formData.wind_speed} onChange={handleChange} />
            </label>
            <label htmlFor="wind_gust">Wind Gust
            <input name="wind_gust" value={formData.wind_gust} onChange={handleChange} />
            </label>
            <label htmlFor="wind_direction">Wind Direction
            <input name="wind_direction" value={formData.wind_direction} onChange={handleChange} />
            </label>
            <label htmlFor="rvr">RVR
            <input name="rvr" value={formData.rvr} onChange={handleChange} />
            </label>
            <label htmlFor="ceiling">Ceiling
            <input name="ceiling" value={formData.ceiling} onChange={handleChange} />
            </label>
            <label htmlFor="weather_phenomenon">Weather Phenomena
            <input name="weather_phenomenon" value={formData.weather_phenomenon} onChange={handleChange} />
            </label>
            <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Predict</button>
            </Box>
        </Modal>
        </>
        );
}

export default ModalWeatherInput