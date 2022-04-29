const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

// Création du schéma d'un commentaire

const commentSchema = sequelize.define('commentSchema', {

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    content: { type: DataTypes.STRING(250), allowNull: false },
},
    { tableName: 'comment', timestamps: true, underscored: true }
);

module.exports = commentSchema;