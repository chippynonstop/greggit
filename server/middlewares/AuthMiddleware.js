const {verify} = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    /*
    grab the token that is sent through the front-end, validate using JWT function verify, 
    if it is valid -> continue with the request 
    else return a json response with an error.
    */
    if(!accessToken){
        return res.json({error: "User not logged in..."});
    }

    try{
        const validToken = verify(accessToken, "X7B78W94jySYsPg6");     //verify accessToken with the secret key
        req.user = validToken;  //---

        if(validToken){
            return next();      //token is valid, return to and continue with the request
        }
    }
    catch(err){
        return res.json({error: err});
    }
};

module.export = {validateToken};