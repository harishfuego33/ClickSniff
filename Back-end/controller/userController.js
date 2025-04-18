const user = require("../model/userModel");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const users = await user.findOne({ email });
    if (users) {
      return res.status(400).json({
        status: "failed",
        message: "User already exists with this email",
      });
    }
    const newUser = await user.create({ firstName, lastName, email, password });
    res.status(201).json({
      status: "success",
      message: "User create successfully",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = { createUser };
