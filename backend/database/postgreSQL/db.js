/* eslint-disable comma-dangle */
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.USERNAME,
  host: 'localhost',
  database: 'databaseName', // TODO: name your database
  password: process.env.PASSWORD,
  port: 5432 // Default port
});

pool.connect((err) => {
  if (err) {
    console.error('connection error in postgreSQL db: ', err);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

module.exports = pool;