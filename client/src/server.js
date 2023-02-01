require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const {db} = require('../server/index')


app.use(cors());
app.use(express.json())


const WeatherListRouter = require('./routes/weatherList')
app.use('/weatherList', WeatherListRouter)




//listen for connection
app.listen(process.env.PORT)
module.exports= app;


