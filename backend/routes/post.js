const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post_controller');
const multer = require('middleware/multer-config');

// Route pour ajouter un post

router.post('', multer, postCtrl.addPost);

// Route pour liker/annuler

router.post('', postCtrl.likePost);

// Route pour supprimer un post

router.delete('', postCtrl.deletePost);

// Route pour récuperer les posts

router.get('', postCtrl.getAllPost);

// Route pour récupérer un post

router.get('', postCtrl.getPost);

// Route pour modifier un post

router.put('', postCtrl.modifyPost);