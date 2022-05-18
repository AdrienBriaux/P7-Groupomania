const DataTypes = require('sequelize');
const sequelize = require('../config/bdd');

// Création du schéma d'une image

const roleSchema = sequelize.define('roleSchema', {

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false }
},
    { tableName: 'roles', timestamps: false, underscored: true }
);

module.exports = roleSchema;