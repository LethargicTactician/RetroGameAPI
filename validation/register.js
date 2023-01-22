const Validator = require('validator');
const ifEmpty = require("./checkForEmpty");

module.exports = function checkRegistrationFields(data){
    //an error object is created
    let errors = {};

    // If data.email is not empty, data.email = data.email
    // else if empty, data.email = ""
    data.username = !ifEmpty(data.username)? data.username:"";
    data.email = !ifEmpty(data.email) ? data.email: "";
    data.password = !ifEmpty(data.password)? data.password:"";
    data.password2 = !ifEmpty(data.password2)? data.password2:"";
    data.streetAddress = !ifEmpty(data.streetAddress)? data.streetAddress:"";
    data.city = !ifEmpty(data.city)? data.city:"";
    data.state = !ifEmpty(data.state)? data.state:"";
    data.zip = !ifEmpty(data.zip)?data.zip:"";

    //making fields required/ be strict on the user
    //username input
    if(Validator.isEmpty(data.username)){
        errors.username= "Username is required";
    }

    //street Address input
    if(Validator.isEmpty(data.streetAddress)){
        errors.streetAddress = "Street address is required";
    }

    //city input
    if(Validator.isEmpty(data.city)){
        errors.city = "City is required";
    }

    //state input
    if(Validator.isEmpty(data.state)){
        errors.state = "State is required";
    }

    //zip code input
    if(Validator.isEmpty(data.zip)){
        errors.zip = "Zipcode is required";
    }

    //email input
    if(Validator.isEmpty(data.email)){
        errors.email = "Email is required.";
    }
    if(!Validator.isEmail(data.email)){
        errors.email = "Email address is invalid";
    }

    //password input
    if(Validator.isEmpty(data.password)){
        errors.password = "Password is required."
    }
    if(!Validator.isLength(data.password, {min: 8, max: 20})){
        errors.password = "Password must be greater than 8 characters";

    }

    //verify password
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirmation password is required";
    }
    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "Both password fields must match"
    }

    // Return the errors from the checkRegistrationFields function
    // and use the ifEmpty function to check if the errors object is empty
    return{
        errors,
        isValid: ifEmpty(errors)
    };
};