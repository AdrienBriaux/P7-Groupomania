const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Création du schèma utilisateur

const userSchema = sequelize.define('userSchema', {

    user_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    admin: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    user_first_name: { type: DataTypes.STRING(255), allowNull: false },
    user_last_name: { type: DataTypes.STRING(255), allowNull: false },
    user_email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    user_password: { type: DataTypes.STRING(255), allowNull: false }
},

    { tableName: 'user', timestamps: false, underscored: true } // Par default "tableName" serait "user" (au pluriel), "timestamps" créé 2 champs automatique pour les dates de création et de modification (très pratique si nécessaire) et "underscored" permet de créer automatiquement des champs de "relation" entre les tables de type "role_id" plutôt que "UserId".
);


module.exports = userSchema;