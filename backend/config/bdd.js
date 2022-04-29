const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: './env' });
// Connection à la base de données

const sequelize = new Sequelize('Groupomania_Socialnetwork', 'root', 'TheSkyIsBlue28!', {

    host: 'localhost',
    dialect: 'mysql',
    logging: false, //passer a true pour voir les différentes requêtes effectuées par l'ORM
});

testConnect();

// On test si la connexion est OK
async function testConnect() {
    try {

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }

    catch (error) {

        console.error('Unable to connect to the database:', error);
    }
};

// On exporte pour utiliser notre connexion depuis les autres fichiers.

module.exports = sequelize;
global.sequelize = sequelize;