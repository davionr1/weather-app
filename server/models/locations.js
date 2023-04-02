const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("../data/worldcities.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function (data) {
    csvData.push(data);
  })
  .on("end", function () {
    // remove the first line: header
    csvData.shift();

    // create a new connection to the database
    const pool = new Pool({
      host: "localhost",
      user: "postgres",
      database: "weather_app",
      password: "Nosilla11!",
      port: 5432,

      idleTimeoutMillis: 0,
      connectionTimeoutMillis: 0,
    });

    const query =
      "INSERT INTO locations (city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";

    pool.connect((err, client, done) => {
      if (err) throw err;

      try {
        csvData.forEach((row) => {
          client.query(query, row, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });
      } catch (e) {
        client.query("ROLLBACK");
      } finally {
        done();
      }
    });
  });

stream.pipe(csvStream);
Footer;
