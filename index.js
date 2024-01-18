const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Pawan Rai ");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login To App</h1> ");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
