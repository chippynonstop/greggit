const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt');

const {sign} = require('jsonwebtoken');
const {validateToken} = require('../middlewares/AuthMiddleware');


//route for Registration
router.post("/", async (req, res) => {
    const {username, password} = req.body;
    bcrypt.hash(password, 10).then((hash) => {  //get the password, hash it and return hash
        Users.create({
            username: username,
            password: hash,
        });
        res.json("SUCCESS");
    });
});

//route for login
router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await Users.findOne({where : {username: username}});

    if(!user){
        res.json({error: "User does not exist"});
    }
    else{
        bcrypt.compare(password, user.password).then((match) =>{    //does the password match
            if(!match){
                res.json({error: "Incorrect username and/or password"});
            }
            else{
                const accessToken = sign({username: user.username, id: user.id}, "X7B78W94jySYsPg6");
                res.json("Logged in...");
            }
        });
    }
});

router.get('/auth', validateToken, (req, res) => {
    res.json(req.user);
});

module.exports = router;