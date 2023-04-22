const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "robin", "Rob1n!", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
