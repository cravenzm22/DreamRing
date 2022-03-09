//HR: Epitome Youtube Channel -> Modified by Zachary M. Craven to fulfill DR requirements - ZMC
//AUTHOR: Zachary M. Craven

const express = require('express');
const app = express();
const keys = require('./config/keys.js');

//Setting up DB
const mongoose = require('mongoose');
                                                //const { urlencoded } = require('express');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

//Setting up database models
require('./model/User');

                                                //console.log("hello world!");

//Setup the routes

require('./routes/authenticationRoutes')(app);


app.listen(keys.port, () => {

    console.log("Listening on " + keys.port);

});