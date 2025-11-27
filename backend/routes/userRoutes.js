const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/signup', userController.signup);
router.get('/verify', userController.verify);
router.post('/resend', userController.resend);
router.post('/login', userController.login);

module.exports = router;
