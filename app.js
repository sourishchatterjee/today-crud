require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
const connectDB= require('./db/db');
const router = require('./router/router');
const teacherRouter =require('./router/teacherRouter')

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.use('/',router)
app.use('/teacher',teacherRouter)
// app.get("/", function (req, res) {
//   res.render("index");
// });


const port= process.env.PORT
app.listen(port,function () {
    
    connectDB();
    console.log(`database connected successfuly ${port}`);
})