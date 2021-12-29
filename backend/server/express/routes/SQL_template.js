const express = require('express');

const template = express.Router(); // CHANGE 'TEMPLATE' TO THE NAME OF YOUR ROUTE
const db = require('../../../database/postgreSQL/db.js'); // USE THE LOCATION OF THE DATABASE YOU CHOSE

// SQL DATABASE ROUTES

template.route('/').get((req, res) => { // CHANGE GET TO THE METHOD YOU WANT, AND CHANGE 'TEMPLATE' TO MATCH ABOVE
  db.query('QUERY', [], (err, data) => { // FILL IN THE QUERY AND PARAMETERS
    if (err) throw err;
    // TODO: res.send();
  });
});

template.route('/').post((req, res) => { // CHANGE POST TO THE METHOD YOU WANT, AND CHANGE 'TEMPLATE' TO MATCH ABOVE
  db.query('QUERY', [], (err, data) => { // FILL IN THE QUERY AND PARAMETERS
    if (err) throw err;
    // TODO: res.send();
  });
});

module.exports = template; // CHANGE 'TEMPLATE' TO YOUR ROUTE