const registerUser = (req, res) =>{
    res.json({message: 'register user'})
}
// auth user
//acces pubic

const loginUser =( req, res)=>{
    res.json({message: 'login user'})
}
// get user info
// acces public
const aboutMe = (req, res)=>{
    res.json({message: 'about me'})
}
module.exports = {
    registerUser,
    loginUser,
    aboutMe
}