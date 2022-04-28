const { Sequelize } = require('sequelize');

// Connection à la base de données

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {

    host: 'localhost',
    dialect: 'mysql',
    logging: false, //passer a true pour voir les différentes requêtes effectuées par l'ORM
});

// On test si la connexion est OK

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// On exporte pour utiliser notre connexion depuis les autres fichiers.

module.exports = sequelize;