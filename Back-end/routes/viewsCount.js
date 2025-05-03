const express = require("express");
const router = express.Router();
const { incrementByOne } = require("../controller/viewCountController");
router.route("/incrementByOne").post(incrementByOne);
module.exports = router;
