const sequelize = require('sequelize');

// Création schèma d'un post

const postSchema = new sequelize.define('postSchema', {

    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

exports = postSchema;