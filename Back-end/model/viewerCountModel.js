const mongoose = require("mongoose");

const viewCountModel = new mongoose.Schema(
  {
    count: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const viewModel = mongoose.model("ViewCount", viewCountModel);
module.exports = viewModel;
