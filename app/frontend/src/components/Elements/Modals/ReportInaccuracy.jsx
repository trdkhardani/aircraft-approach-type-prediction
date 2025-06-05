import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import AxiosInstance from '../../../api/AxiosInstance';
import Checkbox from "@mui/material/Checkbox"

function ModalReportInaccuracy({open, handleClose, predictionLogData}) {
    const ilsLabelBool = Boolean(predictionLogData?.prediction_log?.prediction_log_ils_label)
    const rnavLabelBool = Boolean(predictionLogData?.prediction_log?.prediction_log_rnav_label)
    const rnpLabelBool = Boolean(predictionLogData?.prediction_log?.prediction_log_rnp_label)
    const visualLabelBool = Boolean(predictionLogData?.prediction_log?.prediction_log_visual_label)

    const [ilsLabel, setIlsLabel] = useState(ilsLabelBool);
    const [rnavLabel, setRnavLabel] = useState(rnavLabelBool);
    const [rnpLabel, setRnpLabel] = useState(rnpLabelBool);
    const [visualLabel, setVisualLabel] = useState(visualLabelBool);

    const [inputCorrectionData, setInputCorrectionData] = useState({
        prediction_log_id: predictionLogData?.prediction_log?.prediction_log_id,
        supposed_ils: +ilsLabel,
        supposed_rnav: +rnavLabel,
        supposed_rnp: +rnpLabel,
        supposed_visual: +visualLabel,
        additional_comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputCorrectionData(prev => ({...prev, [name]: value}))
    }
    
    // const handleIlsLabelChange = () => { setIlsLabel(!ilsLabel) }
    // const handleRnavLabelChange = () => { setRnavLabel(!rnavLabel) }
    // const handleRnpLabelChange = () => { setRnpLabel(!rnpLabel) }
    // const handleVisualLabelChange = () => { setVisualLabel(!visualLabel) }

    const handleSubmit = () => {
        const axiosInstance = new AxiosInstance(setLoading, setError);
        axiosInstance.reportInaccuracy(inputCorrectionData, setInputCorrectionData)
        handleClose();
    }

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                <b>Report Inaccuracy</b>
            </Typography>
            <p>Prediction ID: {predictionLogData?.prediction_log?.prediction_log_id}</p>
            {/* <p>ILS: {predictionLogData?.prediction_log?.prediction_log_ils_label}</p>
            <p>RNAV: {predictionLogData?.prediction_log?.prediction_log_rnav_label}</p>
            <p>RNP: {predictionLogData?.prediction_log?.prediction_log_rnp_label}</p>
            <p>VISUAL: {predictionLogData?.prediction_log?.prediction_log_visual_label}</p> */}
            {/* <p>Airport: {predictionLogData?.prediction_log?.prediction_log_airport_icao}</p> */}

            {/* <Checkbox sx={{color: 'black', '&:hover': {bgcolor: 'blue'}}} value={inputCorrectionData.supposed_ils} checked={ilsLabel} onChange={handleIlsLabelChange}/>ILS
            <p>ILS: {+ilsLabel}</p>
            <Checkbox sx={{color: 'black', '&:hover': {bgcolor: 'blue'}}} value={inputCorrectionData.supposed_rnav} checked={rnavLabel} onChange={handleRnavLabelChange}/>RNAV
            <p>RNAV: {+rnavLabel}</p>
            <Checkbox sx={{color: 'black', '&:hover': {bgcolor: 'blue'}}} value={inputCorrectionData.supposed_rnp} checked={rnpLabel} onChange={handleRnpLabelChange}/>RNP
            <p>RNP: {+rnpLabel}</p>
            <Checkbox sx={{color: 'black', '&:hover': {bgcolor: 'blue'}}} value={inputCorrectionData.supposed_visual} checked={visualLabel} onChange={handleVisualLabelChange}/>VISUAL
            <p>VISUAL: {+visualLabel}</p> */}
            <div className="pt-4 space-y-4">
    <h3 className="text-sm font-medium text-gray-700 mb-2">Supposed Correct Approaches (0 or 1)</h3>

    <div>
        <label htmlFor="prediction_log_id" className="block text-sm font-medium text-gray-700">Prediction ID</label>
        <input
        type="text"
        name="prediction_log_id"
        value={inputCorrectionData.prediction_log_id}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>
    <div>
        <label htmlFor="supposed_ils" className="block text-sm font-medium text-gray-700">ILS</label>
        <input
        type="number"
        name="supposed_ils"
        min={0}
        max={1}
        value={inputCorrectionData.supposed_ils}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="supposed_rnav" className="block text-sm font-medium text-gray-700">RNAV</label>
        <input
        type="number"
        name="supposed_rnav"
        min={0}
        max={1}
        value={inputCorrectionData.supposed_rnav}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="supposed_rnp" className="block text-sm font-medium text-gray-700">RNP</label>
        <input
        type="number"
        name="supposed_rnp"
        min={0}
        max={1}
        value={inputCorrectionData.supposed_rnp}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="supposed_visual" className="block text-sm font-medium text-gray-700">Visual</label>
        <input
        type="number"
        name="supposed_visual"
        min={0}
        max={1}
        value={inputCorrectionData.supposed_visual}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>
    <div>
        <label htmlFor="additional_comments" className="block text-sm font-medium text-gray-700">Additional Comments</label>
        <textarea
        // type="textbox"
        name="additional_comments"
        value={inputCorrectionData.additional_comments}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
    </div>
</div>
            <button onClick={handleSubmit} className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'>Report</button>
            </Box>
        </Modal>
        </>
        );
}

ModalReportInaccuracy.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    predictionLogData: PropTypes.object.isRequired
}

export default ModalReportInaccuracy;