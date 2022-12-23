const jwt = require('jsonwebtoken');
const bycrpt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../Models/userModels')




const registerUser = asyncHandler (async(req, res) =>{
    //require auth
    const { name, email, password} = req.body;

    if( !name || !email || !password){
        res.status(400);
        throw new Error('Access denied, bad authentication')
    }

    //check if user exists
    const userValidation = await User.findOne({email});
    if(userValidation){
        res.status(400);
        throw new Error('User already exists')
    }
    //hash password
    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(password, salt);

    //create user
    const user = await User.create({
        name, 
        email,
        password: hashedPassword
    });
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
        
    } else{
        res.status(400)
        throw new Error ('Invalid User Data')
    }
    // res.json({message: 'register user'})
})
// auth user
//acces pubic

const loginUser = asyncHandler (async( req, res)=>{
    res.json({message: 'login user'})
})
// get user info
// acces public
const aboutMe = asyncHandler (async (req, res)=>{
    res.json({message: 'about me'})
})
module.exports = {
    registerUser,
    loginUser,
    aboutMe
}