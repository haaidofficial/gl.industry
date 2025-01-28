const express = require('express');
const router = express.Router();
const { createAdmin } = require('../controllers/userController.js');

router.post('/admin/firstSignup', createAdmin);

module.exports = router;