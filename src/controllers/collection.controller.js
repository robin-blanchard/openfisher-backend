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

async function update(req, res, next) {
  try {
    id = req.params.id;
    collection = await Collection.findByPk(id);
    if (collection == null) {
      throw new Error(`Collection #${id} doesn't exist`);
    }
    await collection.update(req.body);
    res.json(collection);
  } catch (err) {
    console.error(`Error while updating collection`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    id = req.params.id;
    collection = await Collection.findByPk(id);
    if (collection == null) {
      throw new Error(`Collection #${id} doesn't exist`);
    }
    await collection.destroy();
    res.send("Collection successfully destroyed");
  } catch (err) {
    console.error(`Error while removing collection`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
};
