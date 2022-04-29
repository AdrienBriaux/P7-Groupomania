const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Création du schéma d'un like
const likeSchema = sequelize.define('likeSchema', {

    like_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    like_data: { type: DataTypes.NUMBER(100), allowNull: false, defaultValue: 0 },
},
    { tableName: 'like', timestamps: false, underscored: true }
);

module.exports = likeSchema;