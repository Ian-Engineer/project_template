const express = require('express');

const template = express.Router(); // CHANGE 'TEMPLATE' TO THE NAME OF YOUR ROUTE
const db = require('../../../database/mongoDB/db.js'); // USE THE LOCATION OF THE DATABASE YOU CHOSE

// NO SQL DATABASE ROUTES

template.route('/').get(async function (req, res) {
  db
  .collection('YOUR COLLECTION')
  .findOne({}, (err, data) => {
    if (err) res.sendStatus(500);
    res.send(data);
  })
})

template.route('/').post(async function (req, res) {
  db
  .collection('YOUR COLLECTION')
  .insertOne(YOUR_MODEL, (err) => {
    if (err) res.sendStatus(500);
    res.send();
  })
})

module.exports = template; // CHANGE 'TEMPLATE' TO YOUR ROUTE