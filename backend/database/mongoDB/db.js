const mongoose = require('mongoose');
const dbName = 'databaseName'; // TODO: name your database
const url = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open', _ => {
  console.log('Connected to mongoose: ', url);
  console.log('Using database: ', dbName);
});
db.on('error', err => {
  console.error('connection error in mongoDB db: ', err);
});

module.exports = db;