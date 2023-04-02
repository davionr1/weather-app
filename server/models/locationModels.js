const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "weather_app",
  password: "Nosilla11!",
  port: 5432,
});

const getLocations = () => {
  return new Promise(function (resolve, reject) {
    pool.query(`SELECT * from locations`, (error, results) => {
      if (results) {
        resolve(results.rows);
      } else {
        reject(error);
      }
    });
  });
};

module.exports = {
  getLocations,
};
