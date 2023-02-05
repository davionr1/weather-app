const express = require("express")
const app = express()
const PORT = 4000

const locations_model = require('./models/locationsModel')
const weather_model = require('./models/weatherModels')

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!');
//   })

app.get('/locations', (req, res) => {
    locations_model.getLocations()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get('/', (req, res) => {
    weather_model.getWeatherInfo()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.post('/weather', (req, res) => {
    console.log(req.body);
    weather_model.createWeatherInfo(req.body)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        })
})

app.delete('/weather/:id', (req, res) => {
    weather_model.deleteWeatherInfo(req.params.id)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})