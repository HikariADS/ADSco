const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateRole } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/update-role', updateRole);

module.exports = router;
