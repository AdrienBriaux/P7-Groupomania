const Post = require('../models/Post');
const fs = require('fs');


exports.createPost = (req, res, next) => {

    const postObject = req.body;
    delete postObject.id;

    Post.create({

        ...postObject,
        /*content: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,*/
        comment: "",
        like: 0
    })

        .then(() => res.status(201).json({ message: 'Post enregistrĂ© !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.likePost = (req, res, next) => {

};

exports.deletePost = (req, res, next) => {

};

exports.getAllPost = (req, res, next) => {

};

exports.getPost = (req, res, next) => {

};

exports.modifyPost = (req, res, next) => {

};