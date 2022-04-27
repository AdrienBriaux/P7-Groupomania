const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const path = require('path');
const userRoutes = require('./routes/user.routes');

app.use(express.json());

module.exports = app;