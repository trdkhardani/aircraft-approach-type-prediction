// import { useEffect, useState } from "react";
import axios from "axios";

// const BACKEND_API_URL = import.meta.env.BACKEND_API_URL;

class AxiosInstance {
    constructor(setLoading, setError){
        // this.setData = setData;
        this.setLoading = setLoading;
        this.setError = setError;
    }

    fetchMetar(airportIcao, setMetarData){
        axios.get(`http://localhost:3000/api/metar/${airportIcao}`, {
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
        axios.get(`http://localhost:3000/api/rvr/${airportIcao}`, {
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

    fetchRunway(airportIcao, setRunwayData){
        axios.get(`http://localhost:3000/api/runway/${airportIcao}`, {
            headers: {
                'Content-Type': "application/json"
            },
        })
        .then((response) => {
            setRunwayData(response.data)
            this.setLoading(false)
        })
        .catch((err) => {
            this.setError(err.message)
            this.setLoading(false)
        })
    }

    predict(inputData, setPredictionData) {
        axios.post(`http://localhost:3000/api/predict`, inputData, {
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