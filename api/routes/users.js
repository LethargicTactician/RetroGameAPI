// ./api/routes/users.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
//const crypto = require("crypto");
const database = require("../../database.js");

//validation
const checkRegistrationFields =  require("../../validation/register");
//const connection = require("../../database");


//register route
router.post("/register", (req,res) => {
    //Ensures that all inputs are valid
    const { errors, isValid }= checkRegistrationFields(req.body);

    //returns error status 400 if the entries are invalid
    if(!isValid){
        return res.status(400).json(errors);
    }


//module.exports = router;

    bcrypt.genSalt(12, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) throw err;
        database("users")
            .returning(["id","username", "email", "streetAddress", "city", "state", "zip"])
            .insert({
                username: req.body.username,
                email: req.body.email,
                password: hash,
                streetAddress: req.body.streetAddress,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                createdTime: Date.now()

            })
            .then(user => {
            // This is where the api returns json to the /register route
            // Return the id, email, username, etc
            res.json(user[0]);
            })
            .catch(err => {
                errors.account = "Email already registered";
                res.status(400).json(errors);
            });        
        });
        
    });
});

router.get("/user", (req, res) =>{

});
module.exports = router;