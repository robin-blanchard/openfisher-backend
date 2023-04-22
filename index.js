const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./src/services/db.service");
const collectionRouter = require("./src/routes/collection.router");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ Models: sequelize.models });
});

app.use("/collections", collectionRouter);

app.listen(3000, () => {
  console.log("Server Up and running");
  sequelize.sync({ alter: true }).then(() => console.log("DB SYNCED"));
});
