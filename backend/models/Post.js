const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Création schèma d'un post

const postSchema = sequelize.define('postSchema', {

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    content: { type: DataTypes.STRING(200), allowNull: true },
    comment: { type: DataTypes.STRING(500), allowNull: false },
    like: { type: DataTypes.NUMBER(100), allowNull: true, defaultValue: 0 },
},
    { tableName: 'post', timestamps: true, underscored: true }
);

module.exports = postSchema;