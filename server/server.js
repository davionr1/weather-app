const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:4200" // URL of the frontend
};
app.use(cors(corsOptions));
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true }));
// parsing application/x-www-form-urlencoded
const conn = require('./models/database');

conn.getConnection((err) => {
    if (err) throw err;
    console.log('Psql connected with server');
})

const PORT = process.env.PORT || 8080;
//Port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});