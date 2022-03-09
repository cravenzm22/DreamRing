//HR: Epitome Youtube Channel -> Modified by Zachary M. Craven to fulfill DR requirements - ZMC
//AUTHOR: Zachary M. Craven

const mongoose = require('mongoose');
const User = mongoose.model('users')

module.exports = app=> {


//Route
    app.get('/user', async (req, res) =>{
        
        const { rUsername, rPassword, rRingType, rStoneType, rFinishType, rRingWeight, rRingSize } = req.query;
        
        if(rUsername == null || rPassword == null){
            res.send("---Invalid Credentials Entered---")
            return;
        }
        
        var userAccount = await User.findOne({ username : rUsername});
        console.log(userAccount);
        if(userAccount == null){
            //Create new account
            console.log("Create new user . . .");

            var newUser = new User({
                username : rUsername,
                password : rPassword,

                lastAuthentication : Date.now()
            });
            await newUser.save();

            res.send(newUser);
            return;
        } else {
            console.log(userAccount.username);
            console.log(userAccount.password);
            if(rPassword == userAccount.password){
                
                userAccount.lastAuthentication = Date.now();
        

                console.log("Retrieving account . . .");
                userAccount.ringType = rRingType;
                userAccount.stoneType = rStoneType;
                userAccount.finishType = rFinishType;
                userAccount.ringWeight = rRingWeight;
                userAccount.ringSize = rRingSize;
                await userAccount.save();

                console.log("Retrieving account . . .");

                res.send(userAccount);
                return;
            }
        }

        
        res.send("---Invalid Credentials---");
        return;
    });

}