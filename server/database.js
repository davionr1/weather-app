const { config } = require('dotenv');
const Pool = require("pg").Pool;

config();
const PASSWORD = process.env.PASSWORD;

const pool = new Pool({
    user: "postgres",
    password: PASSWORD,
    host: "localhost",
    port: 5432,
    database: "weather_app"
});

module.exports = pool;
