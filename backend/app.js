const express = require('express');

const app = express();
const userRoutes = require('./routes/user_routes');

// DB connection
require('./config/bdd');

app.use('/api', userRoutes);

app.use(express.json());

module.exports = app;