const express = require("express");
const sequelize = require("./src/services/db.service");
const Collection = require("./src/models/collection");

const app = express();

app.listen(3000, () => {
  console.log("Server Up and running");
  console.log("Models", sequelize.models);
});
