const express = require("express");
const router = express.Router();
const collectionController = require("../controllers/collection.controller");

/* GET programming languages. */
router.get("/", collectionController.get);

/* POST programming language */
router.post("/", collectionController.create);

module.exports = router;
