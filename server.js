const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./src/config/models/index");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.post("/register", (req, res) => {
  let {
    first_name,
    last_name,
    user_name,
    email,
    mobile,
    gender,
    password,
    address,
    dob,
    vehicle_types,
  } = { ...req.params, ...req.body, ...req.query };
  console.log("Input", {
    first_name,
    last_name,
    user_name,
    email,
    mobile,
    gender,
    password,
    address,
    dob,
    vehicle_types,
  });
  console.log("Users", db.users);
  db.users
    .create({
      first_name,
      last_name,
      user_name,
      email,
      mobile,
      gender,
      password,
      address,
      dob,
      vehicle_types,
    })
    .then((data) => {
      data = JSON.parse(JSON.stringify(data));
      res.send({
        status: "success",
        data: data,
      });
    })
    .catch((err) => {
      console.log("err", err);
      res.send({
        status: "failed",
      });
    });
});

app.listen(3000);
