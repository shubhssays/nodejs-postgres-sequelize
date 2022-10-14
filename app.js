const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

//set up express app
const app = express();

//Log requests to the console
app.use(logger("dev"));

//parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("*", (req, res) => {
  res.status(200).send({
    message: "Welcome to Node Js Postgres Sequelize Server",
  });
});

app.listen(3000)

module.exports = app;
