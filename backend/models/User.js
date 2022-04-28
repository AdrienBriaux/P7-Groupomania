const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Création du schèma utilisateur

const userSchema = sequelize.define('userModel', {

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nom: { type: DataTypes.STRING(255), allowNull: false },
    prenom: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false }
},

    { tableName: 'utilisateur', timestamps: false, underscored: true }
);


module.exports = userSchema;