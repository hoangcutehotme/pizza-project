var express = require("express");
const router = express.Router({ mergeParams: true });
const ratingController = require("../controllers/ratingController");
const authController = require("../controllers/authController");

module.exports = router;
