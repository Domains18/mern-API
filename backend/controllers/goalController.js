const expressAsyncHandler = require("express-async-handler");

const asyncHandler = require(expressAsyncHandler)

//get
const getGoals =  asyncHandler (async (req, res) => {
    res.status(200).json({message: 'Get goals'});

})

//set
const setGoal = asyncHandler (async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('invalid request');
    }

    res.status(200).json({ message: ` set goals`})
})

//update 
const updateGoal = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` })
})
// delete

const deleteGoal = asyncHandler (async (req, res) =>{
    res.status(200).json({message: `Delete goals ${req.params.id}`})
})
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}