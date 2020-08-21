const axios = require('axios');
const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors()); 
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'Ajjubujji',
  host: 'localhost',
  database: 'mongodb',
  password: 'Ajjubujji1',
  port: 27017,
})
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
  next();
});
 const getUsers = (request, response) => {
     
  pool.query('SELECT * FROM SpotifyApp ORDER BY id ASC', (error, results) => {
    if (error) {
      throw notfound
    }
    response.status(200).json(results.rows);
    console.log('reqbodyyyyy',results.rows);
  })
} 

module.exports = {
    getUsers,
}