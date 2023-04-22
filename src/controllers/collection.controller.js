const Collection = require("../models/collection");

async function get(req, res, next) {
  try {
    res.json(await Collection.findAll());
  } catch (err) {
    console.error(`Error while getting collections`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await Collection.create(req.body));
  } catch (err) {
    console.error(`Error while creating collection`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
};
