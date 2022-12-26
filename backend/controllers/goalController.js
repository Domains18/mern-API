const asyncHandler = require("express-async-handler");


const Goal = require('../Models/goalsModel')
//get
const getGoals =  asyncHandler (async (req, res) => {

    const goals = await Goal.find({ user: req.user.id});
    res.status(200).json(goals)

})

//set
const setGoal = asyncHandler (async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please, Add Text');
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

//update 
const updateGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Not Found!')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal);
})


// delete
const deleteGoal = asyncHandler (async (req, res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal Not found')
    }
    await goal.remove();
    res.status(200).json({id: req.params.id})
})
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}