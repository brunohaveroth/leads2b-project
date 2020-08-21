const express = require('express');
const router = express.Router();
const { TestController } = require('./controllers/loaders');

router.get('/test', TestController.find);

module.exports = (app) => app.use(router);
