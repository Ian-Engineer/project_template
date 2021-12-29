/* eslint-disable import/extensions */
const path = require('path');
const express = require('express');

const app = express();

const router = require('./routes/index.js');

// instantiate app
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../client/dist')));

// API ROUTES
app.use('/api/template', router.template); // COPY THIS AND CHANGE TEMPLATE TO YOUR ROUTE

// WEB ROUTES
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(3000, console.log('Connected to the Express server'));