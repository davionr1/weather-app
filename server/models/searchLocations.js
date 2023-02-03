const PORT = 4000
const express = require('express')
const app = express();
const cors = require("cors");
const { Pool } = require('pg');
const axios = require("axios");
const { response } = require('express');

app.use(cors());

app.listen(PORT, () => {
    console.log("Server is now listening at port", PORT)
})

const client = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Nosilla11!",
    database: "weather_app"
})

client.connect();

axios.get('/locations', async (req, res) => {
    const locationData = `SELECT * from locations`;
    client
        .query(locationData, (error, results)=>{
            if (error){
                throw error
            }else{
                response.status(200).body(results.rows)
            }
        })
        // .then((response) => {
        //     res.send(response.rows)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
})


