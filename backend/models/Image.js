const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Création du schéma d'un like
const imageSchema = sequelize.define('imageSchema', {

    image_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    image_data: { type: DataTypes.STRING(100), allowNull: true, defaultValue: null },
},
    { tableName: 'data', timestamps: false, underscored: true }
);

module.exports = imageSchema;