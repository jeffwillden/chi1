'use strict'

const express = require('express');
const app = express();
const port = process.env.OPENSHIFT_NODEJS_PORT || 8000;
const ipAddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const environment = process.env.CHIASMUS_ENVIRONMENT || 'development';

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/test', (req, res) => {
  res.send('Test is working.');
});

app.listen(port, ipAddress, function () {
  console.log('Listening on port '+port);
});
