const sequelize = require('sequelize');

// Création du schèma utilisateur

const userschema = sequelize.define('utilisateur', {

    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nom: { type: Sequelize.STRING(255), allowNull: false, },
    prenom: { type: Sequelize.STRING(255), allowNull: false, },
    email: { type: Sequelize.STRING(255), allowNull: false, unique: true },
    password: { type: Sequelize.STRING(255), allowNull: false, }
},

    { tableName: 'utilisateur', timestamps: false, underscored: true }
);

exports = userschema;