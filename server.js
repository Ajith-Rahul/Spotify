const MongoClient = require('mongodb').MongoClient;
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');

app.use(express.static(__dirname + '/public'));

app.use(cors());

//Database
 
const uri = "mongodb+srv://Ajjubujji:Ajjubujji@sit725.nt3eb.mongodb.net/SpotifyApp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("SpotifyApp").collection("audio");
  collection.insert({message:'hello_ajith'})
  if(collection){
    console.log("hello world")
  }
  // perform actions on the collection object
  client.close();
});


app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
  next();})

const db = require('./data');
const port = 3000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users',db.getUsers);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
}
)