const { DataTypes, Model } = require("sequelize");

const sequelize = require("../services/db.service");

class Collection extends Model {}

Collection.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chain: {
      type: DataTypes.STRING,
      isIn: [["eth", "matic"]],
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Collection", // We need to choose the model name
  }
);

module.exports = Collection;
