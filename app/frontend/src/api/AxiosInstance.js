// import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_API_URL = import.meta.env.BACKEND_API_URL;

class AxiosInstance {
    constructor(setData, setLoading, setError){
        this.setData = setData;
        this.setLoading = setLoading;
        this.setError = setError;
    }

    fetchMetar(airportIcao){
        axios.get(`http://localhost:3000/api/metar/${airportIcao}`, {
            headers: {
                'Content-Type': "application/json"
            },
        })
        .then((response) => {
            this.setData(response.data)
            this.setLoading(false)
        })
        .catch((err) => {
            this.setError(err.message)
            this.setLoading(false)
        })
    }

    fetchRvr(airportIcao){
        axios.get(`http://localhost:3000/api/rvr/${airportIcao}`, {
            headers: {
                'Content-Type': "application/json"
            },
        })
        .then((response) => {
            this.setData(response.data)
            this.setLoading(false)
        })
        .catch((err) => {
            this.setError(err.message)
            this.setLoading(false)
        })
    }

    fetchRunway(airportIcao){
        axios.get(`http://localhost:3000/api/runway/${airportIcao}`, {
            headers: {
                'Content-Type': "application/json"
            },
        })
        .then((response) => {
            this.setData(response.data)
            this.setLoading(false)
        })
        .catch((err) => {
            this.setError(err.message)
            this.setLoading(false)
        })
    }
}

export default AxiosInstance;