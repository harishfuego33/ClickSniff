require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const corsMiddleware = require("./middleware/corsMiddleware");
const app = express();
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(corsMiddleware);
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "server is running successfully!", status: "success" });
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);

module.exports = app;
