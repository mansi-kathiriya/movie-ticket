require("dotenv").config()
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/v1")

const app = express();

// body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cookieParser())

// routes
app.use("/v1", routes)

app.use((req,res,next) => {
    next(new Error("Route not found!"));
});

// db
connectDB();

// server
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log("Server listning port number "+ process.env.PORT);
});