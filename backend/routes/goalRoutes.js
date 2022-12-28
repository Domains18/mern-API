const express = require ('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require ('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware');


// allowing cross origin

router.use(function (req, res, next){
    res.header("Acces-Control-Allow-Origin", "*");
    res.header('Acces-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').put(protect,updateGoal).delete(protect, deleteGoal);

module.exports = router;