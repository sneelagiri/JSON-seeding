const express = require("express");
const Client = require("./client/model");
const Card = require("./credit-card/model");
const importFunction = require("./import");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.listen(port, () => {
  console.log("Started port on: ", port);
});
