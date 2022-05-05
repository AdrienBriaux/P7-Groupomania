const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

// Création du schéma d'une image

const imageSchema = sequelize.define('imageSchema', {

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    content: { type: DataTypes.STRING(100), allowNull: false },
},
    { tableName: 'image', timestamps: false, underscored: true }
);

module.exports = imageSchema;