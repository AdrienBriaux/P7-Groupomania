const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/user_routes');
const postRoutes = require('./routes/post_routes');
const cors = require('cors');
const sequelize = require('./config/bdd');
const db = require("./models");


// Synchronisation des models sequelize
sequelize.sync({ force: false });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Convertion des réponses en JSON
app.use(express.json());

// Gestion des requêtes avec CORS
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization ');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  res.setHeader('Cross-Origin-Resource-Policy', "cross-origin");
  next();
});

// DB connexion
require('./config/bdd');

// Mise à disposition des routes utilisateur
app.use('/api/user', userRoutes);

// Mise à disposition des routes pour les posts
app.use('/api/post', postRoutes);


// Mise à disposition du contenu images
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;