const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'YOUR_DATABASE_NAME'
});

connection.connect((err) => {
  if (err) {
    console.error('connection error in mySQL db: ', err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

var getQuery = '';
var insertQuery = '';
var deleteQuery = '';
var updateQuery = '';


// Don't forget to export your functions!
module.exports = {
  db: connection,
  getQ: getQuery,
  insertQ: insertQuery,
  deleteQ: deleteQuery,
  updateQ: updateQuery
};
