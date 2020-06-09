'use strict';
const express = require('express');
const cors = require('cors')
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const getResults = require('./scrapper');

const router = express.Router();
router.get('/', async (req, res) => {

  const result = await getResults();

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result }));
});

app.use(bodyParser.json());
app.use(cors())
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
