//simple-api/server.js
const express = require("express");


//express variablecalled "app"
const app = express();
import {initialize} from 'express-openapi';
const bodyParser = require("body-parser");
const userRoutes = require("./api/paths/users/users");
const gameRoutes = require("./api/paths/games/games");
const offersRoute = require("./api/paths/offers/offers");
const apiDoc= require("./api/apiDoc");
const swggerUi = require('swagger-ui-express');


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
  swaggerUi.setup(null,{
    swaggerOptions:{
      url:"http://localhost:3000/apiDoc"
    }
  })
 )

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