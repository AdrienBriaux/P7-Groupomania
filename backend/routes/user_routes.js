const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// On cible le controleur specifique
const userCtrl = require('../controllers/user_controller');

// Route pour créer son compte utilisateur
router.post('/signup', userCtrl.signup);

// Route pour la connection utilisateur
router.post('/login', userCtrl.login);

// Route pour supprimer son compte
router.delete('/deleteAccount', auth, userCtrl.deleteAccount);

// Route pour prendre un utilisateur

router.get('/:id', auth, userCtrl.getOneUser);

module.exports = router;