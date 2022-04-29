const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post_controller');
const multer = require('../middleware/multer-config');

// Route pour ajouter un post

router.post('/', multer, postCtrl.addPost);

// Route pour liker/annuler

router.post('/:id/like', postCtrl.likePost);

// Route pour supprimer un post

router.delete('/:id', postCtrl.deletePost);

// Route pour récuperer les posts

router.get('/', postCtrl.getAllPost);

// Route pour récupérer un post

router.get('/:id', postCtrl.getPost);

// Route pour modifier un post

router.put('/:id', postCtrl.modifyPost);

module.exports = router;