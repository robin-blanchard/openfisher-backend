const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const sequelize = require("./src/services/db.service");
const collectionRouter = require("./src/routes/collection.router");

dotenv.config();

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
  console.log(process.env.OPENSEA_API_KEY);
  sequelize.sync({ alter: true }).then(() => console.log("DB SYNCED"));
});
