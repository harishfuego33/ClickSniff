require("dotenv").config();
const mongoose = require("mongoose")
const app = require("./app");
const connectionString = process.env.CONNECTION_STRING.replace("<PASSWORD>",process.env.PASSWORD);
mongoose.connect(connectionString)
    .then(()=>(console.log("DB connected successfully")))
    .catch((err)=>console.log(err));

const port = process.env.port || 5000;
app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})