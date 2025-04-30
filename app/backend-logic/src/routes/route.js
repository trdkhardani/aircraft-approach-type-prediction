const express = require('express');
const app = express();

const IndexController = require('../controllers/index.controller');

app.get("/api", IndexController.index);
app.get("/test-fetch", IndexController.testFetch)

module.exports = app;