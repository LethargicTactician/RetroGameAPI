//simple-api/server.js
const express = require("express");
var req = require('request');
const router = express.Router();
// var http = require("http");

//express variablecalled "app"
const app = express();
const {initialize} = require('express-openapi');
const bodyParser = require("body-parser");
const userRoutes = require("./api/paths/users/users.old");
const gameRoutes = require("./api/paths/games/games.old");
const offersRoute = require("./api/paths/offers/offers.old");
const apiDoc= require("./api/apiDoc");
const swaggerUi = require('swagger-ui-express');
const { route } = require("./api/paths/users/users.old");


// Configure body-parser settings//
// urlencoded is for bodies that have UTF-8 encoding.
// If {extended: false} you cannot use nested objects.
// e.g. nested obj = {person:{name: adam}}
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//set up api
app.use("/v1/users", userRoutes)
app.use("/v1/games", gameRoutes)
app.use("/v1/offers", offersRoute)


initialize({
  app,
    apiDoc: require("./api/apiDoc"),
    paths: "./api/paths"

});

 app.use(
  "/apiDocs",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions:{
      url:"http://localhost:3000/apiDoc"
    }
  })
 );

const port = process.env.port ||3050;
app.listen(port, () => console.log("Listening on port: " + port));

// Handling Errors
app.use((req, res, next,err) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

module.exports = router