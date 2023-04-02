# What's the Weather

## *Authors*
    - Davion Roachford 
    - Aidan Papineau 
    - Aaron Thomas 
    - Allison Lowe

## App Summary
  -  Weather app will initially show users current location with current city name, temperature, high and low, and weather condition. The app will also allow users to add weather for locations around the world.  The user may also click on a given location and be provided with a more in depth weather report inclduing, 7 day forecast, hourly forecast, humidity, precipitation, and more.

## Formating
| **Front-End** | **Back-End** |
| --- | --- |
| React Redux | PostgresSQL |
| React-select | Express |
| React-icon |

### Setup
- First, you'll need a Postgres database to connect to. Follow instructions here to setup the database and save credentials for the next step.

- Now create a `.env` file inside of `backend`. It will need to contain the following environment variables (change the values for the database to match what you defined in the previous step)
```
PORT=5000
DB_USERNAME=user
DB_PASSWORD=password
DB_DATABASE=weather
```

- `cd` into `backend` and run `npm install` to install dependencies for the API.

- `cd` into `frontend`, and run `npm install` to install dependencies for the React app.

- Lastly, in separate terminals, run `npm start` in each folder so that the API and React app are running at the same time.

## API 
[API Reference](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/)
