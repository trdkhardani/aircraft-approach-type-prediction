const express = require('express');
const app = express();

const IndexController = require('../controllers/index.controller');
const PredictController = require('../controllers/predict.controller');
const AirportController = require('../controllers/airport.controller');
const ReportController = require('../controllers/report.controller');

app.get("/api", IndexController.index);
app.get("/test-fetch", IndexController.testFetch)

app.post("/api/predict", PredictController.dataInput)

app.get("/api/prediction-log/:predictionLogId", ReportController.showLogDetails)
app.post("/api/report-inaccuracy", ReportController.reportInaccuracy)

app.get("/api/metar/:airportIcao", AirportController.getMetar)
app.get("/api/rvr/:airportIcao", AirportController.getRvr)
app.get("/api/airport/:airportIcao", AirportController.getAirportInfo)

module.exports = app;