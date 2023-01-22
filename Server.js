//simple-api/server.js
const express = require("express");

//express variablecalled "app"
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./api/routes/users");

// Configure body-parser settings//
// urlencoded is for bodies that have UTF-8 encoding.
// If {extended: false} you cannot use nested objects.
// e.g. nested obj = {person:{name: adam}}
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set up api
app.use("/V1/users", userRoutes)

const port = process.env.port ||3000;
app.listen(port, () => console.log("Listening on port: " + port));

// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});