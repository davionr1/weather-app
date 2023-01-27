const { Client } = require("pg");
require('dotenv').config();


// module.exports.getClient = async()=>{
//     const client = new Client({
//         host: "localhost",
//         user: "postgres",
//         port: 5432,
//         password: process.env.PG_PASSWORD,
//         database: "weather_app"
//     });
//     await client.connect();
//     return client;
// }


(async () => {
    const client = new Client({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: process.env.PG_PASSWORD,
        database: "weather_app"
    });
    await client.connect();
    const res = await client.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
    console.log(res.rows[0].connected);
    await client.end();
})();
