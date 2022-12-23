const express = require('express');
const router = express.Router()
const { registerUser, aboutMe, loginUser } = require('../controllers/userController')

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', aboutMe);

module.exports = router;