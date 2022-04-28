const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Création schèma d'un post

const postSchema = new sequelize.define('postSchema', {

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    data: { type: [DataTypes.STRING(600)], allowNull: false },
    likes: { type: DataTypes.NUMBER(500), allowNull: true }
},
    { tableName: 'post', timestamps: true, underscored: true }
);

module.exports = postSchema;