const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Création schèma d'un post

const postSchema = sequelize.define('postSchema', {

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    data: { type: [DataTypes.STRING(600)], allowNull: false },
    likes: { type: DataTypes.NUMBER(100), allowNull: true, defaultValue: 0 },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
},
    { tableName: 'post', timestamps: true, underscored: true }
);

module.exports = postSchema;