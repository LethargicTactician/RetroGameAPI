-- ?*was used to test if i could make a database from the program but did not work lol*/
DROP DATABASE IF EXISTS retrogame_api;
CREATE DATABASE retrogame_api;


CREATE TABLE users(
    userid int,
    username varchar(128),
    email varchar(128),
    password varchar(128),
    streetAddress varchar(255),
    city varchar(255),
    state varchar(128),
    zip varchar(128)

    
);