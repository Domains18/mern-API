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
            email: user.email,
            token: generateToken(user._id)
        })
        
    } else{
        res.status(400)
        throw new Error ('Invalid User Data')
    }
    // res.json({message: 'register user'})
})
// auth user
//acces public

const loginUser = asyncHandler (async( req, res)=>{
    const {email, password } = req.body;
    //check ths user
    const user = await User.findOne({email});
    if(user && (await bycrpt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
            
        });
    } else{
        res.status(400)
        throw new Error('Access Denied, Invalid credentials')
    }
    // res.json({message: 'login user'})
})
// get user info
// access private
const aboutMe = asyncHandler (async (req, res)=>{
    // res.json({message: 'about me'});
    const {_id, name, email, } = await User.findById(req.user.id);

    res.status(200).json({
        id: _id,
        name, 
        email
    });
});


//generate token 

const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '30d',
    })
}
module.exports = {
    registerUser,
    loginUser,
    aboutMe
}