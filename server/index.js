const express = require('express');
const cors = require('cors');
const pool = require('./db.js');
const PORT = process.env.PORT || 5000;

const app = express();

//Middlware
app.use(cors());
app.use(express.json());

//Routes

//Create a todo


//Get a todo


//Get all todos


//Edit todo


//Delete todo

app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}`)
});
