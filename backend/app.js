const express = require('express');
require('./config/bdd');
const app = express();
const userRoutes = require('./routes/user_routes');
const postRoutes = require('./routes/post_routes');

// DB connection
require('./config/bdd');

// Mise à disposition des routes utilisateur
app.use('/api/user', userRoutes);

// Mise à disposition des routes pour les posts
app.use('/api/post', postRoutes);

app.use(express.json());

module.exports = app;