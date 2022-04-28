const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const userRoutes = require('./routes/user_routes');

// DB connection
require('./config/bdd');

app.use('/api', userRoutes);

app.use(express.json());

module.exports = app;