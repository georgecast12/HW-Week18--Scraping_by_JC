var express = require("express");
var router = express.Router();

var saved_controller = require("../controllers/saved_controller");

router.get("/", saved_controller.index);

// router.post("/new", saved_controller.createTrip);

module.exports = router;
