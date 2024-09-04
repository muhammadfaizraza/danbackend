const express = require("express");
const { isAuthenticated } = require("../middleware/auth.js");


const { createScore } = require("../controllers/scoreController.js");

const router = express.Router();

router.route("/createScore").post(isAuthenticated, createScore);



module.exports = router;
