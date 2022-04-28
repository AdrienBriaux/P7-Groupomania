const sequelize = require('sequelize');

// Création schèma d'un post

const postSchema = new sequelize.define('postSchema', {

    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    data: { type: [sequelize.STRING(600)], allowNull: false },
},
    { tableName: 'role', timestamps: false, underscored: true }
);

exports = postSchema;