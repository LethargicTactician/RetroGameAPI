var mysql = require('mysql');
//var express = require('express');
//var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');



const database = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Colacion#324265',
    database: 'retrogame_api'
});

database.connect(function(err){
    if(err){
        return console.error('error:' + err.message);
    }
    console.log('Connected to MySQL server!');
});
module.exports = database;