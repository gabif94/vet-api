const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const dotenv = require("dotenv");
dotenv.config()

//definicion de rutas
const patients = require('./routes/patients')

dotenv.config();

const { dbConnection } = require("./database/config");

dbConnection();


const app = express();
const PORT = 3000

app.listen(PORT)
console.log('ESCUCHANDO PA')

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// use routes
app.use("/patients", patients);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.sendStatus(404);
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err);
  res.sendStatus(500);
});

module.exports = app;