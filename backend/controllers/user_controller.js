const bcrypt = require('bcrypt');
const webToken = require('jsonwebtoken');

const User = require('../models/User');


// Controleur création d'utilisateur

exports.signup = (req, res, next) => {

    // On hache le mot de passe avec bcrypt

    bcrypt.hash(req.body.password, 10)

        .then(hash => {

            // On créer un nouvel objet utilisateur avec le mot de passe haché

            User.create({

                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash
            })

        
            then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));

            // On sauvegarde l'objet utilisateur

        })

        .catch(error => res.status(500).json({ error }));
};

// Controleur connection utilisateur

exports.login = (req, res, next) => {

    // On cherche si l'email existe dans la base de données

    User.findOne({ where: { email: req.body.email } })

        .then(user => {

            // Si l'utilisateur nest pas trouvé

            if (!user) {

                return res.status(401).json({ message: 'Utilisateur non trouvé !' });
            }

            // On utilise la fonction "compare" avec bcrypt pour savoir si le mot de passe peut générer la même empreinte que le hash

            bcrypt.compare(req.body.password, user.password)

                .then(validation => {

                    // Si le mot de passe est incorrect
                    if (!validation) {

                        return res.status(401).json({ message: 'Mot de passe incorrect !' });
                    }

                    // On renvoi l'user ID ainsi que son token d'authentification

                    res.status(200).json({

                        userId: user.id,

                        // On créer un token d'identification qui sera retourné

                        token: webToken.sign({ userId: user.id },
                            process.env.SECRET_KEY,
                            { expiresIn: '24h' })
                    });
                })

                .catch(error => res.status(500).json({ error }));
        })

        .catch(error => res.status(500).json({ error }));
};

// Controleur suppression du compte utilisateur
exports.deleteAccount = (req, res, next) => {


};

// Controleur pour récupérer un utilisateur
exports.getOneUser = (req, res, next) => {

    const userId = req.params.id;


    if (userId !== req.auth.userId) {

        return res.status(403).json({ error: new Error('403: unauthorized request') })
    }

    User.findByPK(userId)

        .then(user => {

            if (!user) {

                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({

                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            })
        })

        .catch(error => res.status(500).json({ error }));
};