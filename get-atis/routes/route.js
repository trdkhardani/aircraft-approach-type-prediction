const express = require('express');
const app = express();
const IndexController = require('../controllers/index.controller');
const AtisController = require('../controllers/atis.controller');

app.get('/', IndexController.index)
app.get('/api/atis', AtisController.showAtisInfoHistory)

module.exports = app