const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const userRoutes = require('./routes/user_routes');

app.use('/api', userRoutes);

app.use(express.json());

module.exports = app;