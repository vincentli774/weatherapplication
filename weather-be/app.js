//use express, cors, and body-parser to simplify
//the request handling
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

//using cors allows the front-end to make requests 
// for cities to the back-end
app.use(cors())
//body-parser parses incoming requests making them 
//available as objects
app.use(bodyParser.json());
let cities = []; // In-memory storage for cities

//get route for cities
app.get("/cities", (req, res) => {
  res.json(cities);
});

//post route for cities
app.post("/addCities", (req, res) => {
  //accessing city key value in json object body
  const city = req.body["city"];
  //adding city value to cities in-memory storage
  cities.push(city);
  //the 201 code indicates that the city has been added
  res.status(201).json(city);
});
  
//lets the server run on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});