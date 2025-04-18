const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../model/userModel");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await user.findOne({ email: email });
    if (!userData)
      return res.status(400).json({
        status: "failed",
        message: "Email or password in incorrect",
      });
    const passwordMatch = await bcrypt.compare(password, userData.password);
    if (!passwordMatch)
      return res.status(400).json({
        status: "failed",
        message: "Email or password in incorrect",
      });
    const jwtToken = jwt.sign({ userId: userData._id }, process.env.PASSWORD, {
      expiresIn: "1h",
    });
    const data = {
      name: userData.firstName + " " + userData.lastName,
      email: userData.email,
    };
    res.status(200).json({
      status: "Success",
      data: {
        user: data,
        token: jwtToken,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = { login };
