const viewModel = require("../model/viewerCountModel");

const incrementByOne = async (req, res) => {
  try {
    const indianTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    const createdAtDate = new Date(indianTime);
    viewCount = new viewModel({ count: 1, createdAt: createdAtDate });
    await viewCount.save();
    const totalCount = await viewModel.find({});
    res.status(201).json({
      status: true,
      message: "count updated",
      data: {
        count: totalCount,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = { incrementByOne };
