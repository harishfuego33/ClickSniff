require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(
  cors({
    origin: "https://suspicious-url-detector.vercel.app/",
    credentials: true,
  })
);
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
