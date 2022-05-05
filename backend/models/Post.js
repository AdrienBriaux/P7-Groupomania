const { DataTypes } = require('sequelize');
const sequelize = require('../config/bdd');


// Création schèma d'un post

const postSchema = sequelize.define('postSchema', {

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    content: { type: DataTypes.STRING(200), allowNull: true },
    comment: { type: DataTypes.STRING(500), allowNull: false },
    like: { type: DataTypes.STRING, allowNull: true, defaultValue: 0 },
},
    { tableName: 'post', timestamps: true, underscored: true }
);

module.exports = postSchema;