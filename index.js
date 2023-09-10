const express = require("express");


//Connection mongodb
const { connectMongoDb} = require("./connection");

//import middleware(no need to mention index file by default it takes it)
const{ logReqRes } = require("./middlewares");

//import routes
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

//Connection Mongodb url
connectMongoDb("mongodb://127.0.0.1:27017/authentication-app-1").then(()=>console.log("MongoDb Connected !"));

// 01 Middleware(plugin) (inbuilt)
app.use(express.urlencoded({ extended: false }));

// 02 (creating a log)sent request after passing by this middleware
app.use(logReqRes("log.txt"));

// Routes
app.use("/api/users",userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
