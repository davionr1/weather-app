const {Client}=require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Nosilla11!",
    database: "weather_app"
})

module.exports = client