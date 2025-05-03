const cors = require("cors");

module.exports = cors({
  origin: "*", // Change to specific domain in production
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});
