//handling request and response.
//express app handels HTTP requests and responses.
// req = object contain information about the client request.
// ex- URLs,Headers,Query Params,Request Body.

const express = require("express")
const app = express()

app.get("/",(req,res) => {
    console.log("Started ....."); 
    res.send("Welcome to request and response.")
})

//query params
app.get("/user",(req,res) => {
    console.log(req.query.name); // ?param ex. ?name 3-4 examples.
    res.send(`<h2>${req.query.name}</h2>`)
})

app.listen(3000,()=> console.log("Server Started on 3000 port ....."))
