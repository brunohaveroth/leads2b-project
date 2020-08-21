const express = require('express');
const router = express.Router();
const { UserController } = require('./controllers/loader');

router.get('/user', UserController.find);

module.exports = (app) => app.use(router);
