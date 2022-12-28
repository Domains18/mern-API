const express = require('express');
const router = express.Router()
const { registerUser, aboutMe, loginUser } = require('../controllers/userController')


const { protect } = require('../middleware/authMiddleware');
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, aboutMe);

module.exports = router;