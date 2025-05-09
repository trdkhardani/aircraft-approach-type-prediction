const express = require('express');
const app = express();

const IndexController = require('../controllers/index.controller');
const PredictController = require('../controllers/predict.controller');
const AirportController = require('../controllers/airport.controller');

app.get("/api", IndexController.index);
app.get("/test-fetch", IndexController.testFetch)

app.post("/api/predict", PredictController.dataInput)

app.get("/api/metar/:airportIcao", AirportController.getMetar)
app.get("/api/runway/:airportIcao", AirportController.getRunways)

module.exports = app;