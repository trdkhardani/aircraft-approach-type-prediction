const express = require('express');
const app = express();

const IndexController = require('../controllers/index.controller');
const PredictController = require('../controllers/predict.controller');

app.get("/api", IndexController.index);
app.get("/test-fetch", IndexController.testFetch)

app.post("/api/predict", PredictController.airportIcaoOneHotEncode)

module.exports = app;