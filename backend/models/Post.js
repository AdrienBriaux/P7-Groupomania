const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Création schèma d'un post

const postSchema = sequelize.define('postSchema', {

    post_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    post_image: { type: DataTypes.STRING(200), allowNull: true },
    post_comment: { type: DataTypes.STRING(500), allowNull: false },
},
    { tableName: 'post', timestamps: true, underscored: true }
);

module.exports = postSchema;