const express = require('express');
const router = express.Router();

// On cible le controleur specifique
const userCtrl = require('../controllers/user_controller');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

modules.exports = router;