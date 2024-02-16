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

// ejs view template
app.set("view wngine","ejs");

// routes
app.use("v1", routes)

app.get("/", (req,res,next) => {
    res.render("index")
})
// db
connectDB();

// server
http.createServer(app).listen(process.env.PORT, () => {
    console.log("server started");
})