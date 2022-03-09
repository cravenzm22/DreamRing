//HR: Epitome Youtube Channel -> Modified by Zachary M. Craven to fulfill DR requirements - ZMC
//AUTHOR: Zachary M. Craven


const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

    username: String,
    password: String,
    ringType: String,
    stoneType: String,
    finishType: String,
    ringWeight: Number,
    ringSize: Number,

    lastAuthentication: Date,

})

mongoose.model('users', userSchema);