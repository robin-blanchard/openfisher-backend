const express = require("express");
const router = express.Router();
const collectionController = require("../controllers/collection.controller");

/* GET programming languages. */
router.get("/", collectionController.get);

/* POST programming language */
router.post("/", collectionController.create);

router.put("/:id", collectionController.update);

router.delete("/:id", collectionController.remove);

router.get("/:id/lastListings", collectionController.getLastListings);

router.get("/:id/traits", collectionController.getTraits);

module.exports = router;
