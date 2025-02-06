const express = require("express");
const geocodingController = require("../controller/geo");

const router = express.Router();

router.get("/geocode/:address", geocodingController.getCoordinates);

module.exports = router;
