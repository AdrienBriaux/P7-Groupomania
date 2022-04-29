const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Création du schéma d'un like
const commentSchema = sequelize.define('commentSchema', {

    comment_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    comment_data: { type: DataTypes.STRING(250), allowNull: false },
},
    { tableName: 'comment', timestamps: true, underscored: true }
);

module.exports = commentSchema;