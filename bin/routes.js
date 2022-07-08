const express = require("express");
const app = express();
const controller = require("./Controller");

app.get("/", (req, res) => {
  res.send("Hola mundo de mierda");
});

app.get("/users", (req, res) => {
  let users = [
    { name: "Jhon", lastName: "Doe", age: 30 },
    { name: "María", lastName: "Sharápova", age: 32 }
  ];
  res.send(users);
});

exports.app = app;