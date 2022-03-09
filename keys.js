//HR: Epitome Youtube Channel -> Modified by Zachary M. Craven to fulfill DR requirements - ZMC
//AUTHOR: Zachary M. Craven


if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}