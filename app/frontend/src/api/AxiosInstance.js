// import { useEffect, useState } from "react";
import axios from "axios";

const VITE_BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;

class AxiosInstance {
    constructor(setLoading, setError){
        // this.setData = setData;
        this.setLoading = setLoading;
        this.setError = setError;
    }

    fetchMetar(airportIcao, setMetarData){
        axios.get(`${VITE_BACKEND_API_URL}/api/metar/${airportIcao}`, {
            headers: {
                'Content-Type': "application/json"
            },
        })
        .then((response) => {
            setMetarData(response.data)
            this.setLoading(false)
        })
        .catch((err) => {
            this.setError(err.message)
            this.setLoading(false)
        })
    }

    fetchRvr(airportIcao, setRvrData){
        axios.get(`${VITE_BACKEND_API_URL}/api/rvr/${airportIcao}`, {
            headers: {
                'Content-Type': "application/json"
            },
        })
        .then((response) => {
            setRvrData(response.data)
            this.setLoading(false)
        })
        .catch((err) => {
            this.setError(err.message)
            this.setLoading(false)
        })
    }

    fetchAirport(airportIcao, setAirportData){
        axios.get(`${VITE_BACKEND_API_URL}/api/airport/${airportIcao}`, {
            headers: {
                'Content-Type': "application/json"
            },
        })
        .then((response) => {
            setAirportData(response.data)
            this.setLoading(false)
        })
        .catch((err) => {
            this.setError(err.message)
            this.setLoading(false)
        })
    }

    predict(inputData, setPredictionData) {
        axios.post(`${VITE_BACKEND_API_URL}/api/predict/with-airport`, inputData, {
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then((response) => {
            setPredictionData(response.data)
            this.setLoading(false)
        })
        .catch((err) => {
            this.setError(err.message)
            this.setLoading(false)
        })
    }
}

export default AxiosInstance;