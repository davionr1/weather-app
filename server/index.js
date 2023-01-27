const { config, parse } = require('dotenv');
const express = require('express');
const cors = require('cors');
//const pool = require("./database");
const app = express();


config();
const PORT = parseInt(process.env.PORT);

//MIDDLEWARE//
app.use(cors());
app.use(express.json());

//ROUTES//
app.get('/', (req, res) => {
    res.send('Node.js is working!');
});


app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})