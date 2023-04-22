const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("openfisher", "robin", "R0bin!", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
