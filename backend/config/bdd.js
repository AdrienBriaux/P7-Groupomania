const Sequelize = require('sequelize');

// Connection à la base de données

const bdd = new Sequelize('groupomania_socialnetwork', 'root', 'TheSkyIsBlue28!', {

    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Passer a true pour voir les différentes requêtes effectuées par l'ORM
});

testConnect();

// On teste si la connexion est OK
async function testConnect() {
    try {

        await bdd.authenticate();
        console.log('Connection has been established successfully.');
    }

    catch (error) {

        console.error('Unable to connect to the database:', error);
    }
};

// On exporte pour utiliser notre connexion depuis les autres fichiers.

module.exports = bdd;
global.sequelize = bdd;