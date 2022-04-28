const Sequelize = require('sequelize');

// Connection à la base de données

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {

    host: 'localhost',
    dialect: 'mysql',
    logging: false, //passer a true pour voir les différentes requêtes effectuées par l'ORM
});

// On exporte pour utiliser notre connexion depuis les autre fichiers.

exports = sequelize;