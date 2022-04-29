const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post_controller');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

// Route pour créer un post

router.post('/', auth, multer, postCtrl.createPost);

// Route pour liker/annuler

router.post('/:id/like', auth, postCtrl.likePost);

// Route pour supprimer un post

router.delete('/:id', auth, postCtrl.deletePost);

// Route pour récuperer les posts

router.get('/', auth, postCtrl.getAllPost);

// Route pour récupérer un post

router.get('/:id', auth, postCtrl.getPost);

// Route pour modifier un post

router.put('/:id', auth, postCtrl.modifyPost);

module.exports = router;