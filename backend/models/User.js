const sequelize = require('sequelize');

// Création du schèma utilisateur

const userschema = sequelize.define('utilisateur', {

    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nom: { type: sequelize.STRING(255), allowNull: false },
    prenom: { type: sequelize.STRING(255), allowNull: false },
    email: { type: sequelize.STRING(255), allowNull: false, unique: true },
    password: { type: sequelize.STRING(255), allowNull: false }
},

    { tableName: 'utilisateur', timestamps: false, underscored: true }
);


exports = userschema;