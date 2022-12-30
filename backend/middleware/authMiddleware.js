const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../Models/userModels');

const protect = asyncHandler( async (req, res, next)=>{
    let token
    if ( req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]
            //token verification
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            //get user from token
            req.user = await User.findById(decoded.id).select('-password')
            next()
        }catch (error){
            console.log(error);
            res.status(401);
            throw new Error('Invalid Token, Unauthorized')
            exit(1)
        }
    } 

    if(!token){
        res.status(401);
        throw new Error(' No token found, Unauthorized Access')
    }
});

module.exports = { protect }