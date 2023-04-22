const express = require("express");

const port = "3000";

const app = express();

app.get("/", (req, res)=>{
    console.log("Hello")
    res.send("Hello")
})

app.listen(port, ()=>{
    console.log("Server Start")
})