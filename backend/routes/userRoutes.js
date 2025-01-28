const express = require('express');
const router = express.Router();
const { login, createUser, getUser } = require('../controllers/userController.js');
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware.js');

router.post('/login', login);
router.get('/loginUser', getUser);
router.post('/users', authenticateToken, isAdmin, createUser);

// router.post('/users', createUser);

module.exports = router;
