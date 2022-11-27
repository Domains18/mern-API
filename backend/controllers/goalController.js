const asyncHandler = require("express-async-handler");


const Goal = require('../Models/goalsModel')
//get
const getGoals =  asyncHandler (async (req, res) => {

    const goals = await Goal.find();
    res.status(200).json(goals)

})

//set
const setGoal = asyncHandler (async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please, Add Text');
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
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