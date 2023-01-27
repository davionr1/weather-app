require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const pool = require('./server/database')

app.use(cors());
app.use(express.json())
//Routes

app.post("/WeatherGallery", async (req, res)=>{
    console.log('route handler ran');
 })



//Get one from list 
app.get('/WeatherGallery/:id', (req,res)=>{
    console.log(req.params);
    
    });

//add to list
app.post("/WeatherGallery", (req,res)=>{
    console.log(req.body)
})

//Edit weather list
app.put('/WeatherGallery/:id', (req,res)=>{
    console.log(req.params.id);
    console.log(res.body);
})



//Search for weather locations
app.get('/SearchWeather', (req,res)=>{
    res.render("SearchWeather")
})



//Delete from weather list
app.delete('', (req,res)=>{
    res.render("")
})

//404 page
app.get('*', (req,res)=> {
    res.render('error404')
})

//listen for connection
app.listen(process.env.PORT)
module.exports= app;


