const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Enter the first name"],
  },
  lastName: {
    type: String,
    required: [true, "Enter the last name"],
  },
  email: {
    type: String,
    required: [true, "Enter the email"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: "Enter a valid email",
    },
  },
  password: {
    type: String,
    required: [true, 'Enter the password'],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]).{6,}$/,
      "Please provide a strong password",
    ],
  },
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
