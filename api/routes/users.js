// ./api/routes/users.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt.js");
const crypto = require("crypto");
const database = require("../../database");

//validation
const checkRegistrationFields =  require("../../validation/register");


//register route
router.post("/register", (req,res) => {
    //Ensures that all inputs are valid
    const { errors, isValid }= checkRegistrationFields(req.body);

    //returns error status 400 if the entries are invalid
    if(!isValid){
        return res.status(400).json(errors);
    }
});

module.exports = router;