const webToken = require('jsonwebtoken');

module.exports = (req, res, next) => {

    try {

        const token = req.headers.authorization.split(' ')[1];

        // On vérifie que le token possédé par l'utilisateur à été créé avec la même clé secrète

        const decodedToken = webToken.verify(token, process.env.SecretKey);

        // On récupére le user Id contenu dans le token 

        const userId = decodedToken.userId;
        req.auth = { userId };

        // Si le user ID envoyer correspond à l'user ID encodé dans le token

        if (req.body.userId && req.body.userId !== userId) {

            return res.status(403).json({

                message: 'unauthorized request'
            });
        }

        else {

            next();
        }

    }

    catch {

        res.status(401).json({

            message: 'Invalid request or token expired'
        });
    }
};