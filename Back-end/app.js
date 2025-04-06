require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const userRouter = require("./routes/userRouter");

if(process.env.NODE_ENV=="development"){
    app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "server is running successfully!", status: "success" });  
});

app.use("/api/v1/user",userRouter);



module.exports = app;