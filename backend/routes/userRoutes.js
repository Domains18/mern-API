const express = require('express');
const router = express.Router()
const { registerUser, aboutMe, loginUser } = require('../controllers/userController')


const { protect } = require('../middleware/authMiddleware');
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, aboutMe);

module.exports = router;