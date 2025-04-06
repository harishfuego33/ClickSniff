const express = require("express");
const router = express.Router();
const { createUser,login } = require("../controller/userController");

router.route("/createUser").post(createUser);
router.route("/login").post(login);

module.exports=router;
